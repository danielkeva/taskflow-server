module.exports = connectSockets;

function connectSockets(io) {
    io.on('connection', socket => {
        // const userId = socket.request.session.passport.user;
        // const userId = socket.request.session;
        // console.log('inside socket.io: ', userId);
        // if (userId) {
        // socket.emit('userExist', userId);
        // }
        socket.on('board topic', boardId => {
            if (socket.boardTopic) {
                socket.leave(socket.boardTopic);
            }
            socket.join(boardId);
            socket.boardTopic = boardId;
        });

        socket.on('update board', board => {
            socket.broadcast.to(socket.boardTopic).emit('update board', board);
        });
    });
}
