module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('board topic', boardId => {
            if (socket.boardTopic) {
                socket.leave(socket.boardTopic)
            }
            socket.join(boardId)
            socket.boardTopic = boardId;
        })

        // socket.on('update board', board => {
        //     io.to(socket.boardTopic).emit('update newBoard', board)
        // })

        // socket.on('task topic', taskId => {
        //     if (socket.myTask) {
        //         socket.leave(socket.myTask)
        //     }
        //     socket.join(taskId)
        //     socket.myTask = taskId;
        // })
        socket.on('update board', board => {
            io.to(socket.boardTopic).emit('update board', board)
        })
        // socket.on('update board', board => {
        //     socket.broadcast.to(socket.boardTopic).emit('update board', board)
        // })
    })
}