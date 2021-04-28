const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const config = require('./config')
const passport = require('passport')
require('./config/passport')
const cors = require('cors')
const path = require('path')
const app = express()

// Load environment variables from .env file
require('dotenv').config()

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const boardRoutes = require('./api/board/board.routes')
const activityRoutes = require('./api/activity/activity.routes')
const connectSockets = require('./api/socket/socket.routes')

// dotenv.config();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}


app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const sessionMiddleware = session({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({ url: config.dbURL })
})
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
    // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only
    // connections, as 'socket.request.res' will be undefined in that case
});

connectSockets(io)

// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/board', boardRoutes)
app.use('/api/activity', activityRoutes)


if (process.env.NODE_ENV === 'production') {
    //To make browserRouter client routing to work
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}


const logger = require('./services/logger.service')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});

