const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');
const passport = require('passport');
require('./config/passport');
const cors = require('cors');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const boardRoutes = require('./api/board/board.routes');
const activityRoutes = require('./api/activity/activity.routes');
const connectSockets = require('./api/socket/socket.routes');

const { PORT = 3030, CLIENT_URL = 'http://localhost:3000' } = process.env;

const corsOptions = {
    origin: CLIENT_URL,
    credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const sessionMiddleware = session({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: {}, // two weeks in milliseconds
    store: MongoStore.create({ mongoUrl: config.dbURL }),
});
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
    // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only
    // connections, as 'socket.request.res' will be undefined in that case
});

connectSockets(io);

// routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/board', boardRoutes);
app.use('/activity', activityRoutes);

const logger = require('./services/logger.service');

http.listen(PORT, () => {
    logger.info('Server is running on port: ' + PORT);
});
