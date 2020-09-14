const logger = require('../../services/logger.service')
const boardService = require('./board.service')

async function getBoards(req, res) {
    try {
        const boards = await boardService.query(req.query)
        res.json(boards)
    } catch (err) {
        logger.error('Cannot get reviews', err);
        res.status(500).send({ error: 'cannot get boards' })

    }
}
async function getBoard(req, res) {
    try {
        const board = await boardService.getById(req.params.id)
        res.json(board)
    } catch (err) {
        logger.error('Cannot find the board', err);
        res.status(500).send({ error: 'cannot get BOARD' })
        throw err
    }
}
async function updateBoard(req, res) {
    try {
        const board = await boardService.update(req.body)
        res.json(board)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update BOARD' })
        throw err
    }
}

// async function deleteReview(req, res) {
//     await boardService.remove(req.params.id)
//     res.end()
// }

// async function addReview(req, res) {
//     var board = req.body;
//     board.byUserId = req.session.user._id;
//     board = await boardService.add(board)
//     board.byUser = req.session.user;
//     // TODO - need to find aboutUser
//     board.aboutUser = {}
//     res.send(board)
// }

module.exports = {
    getBoards,
    getBoard,
    updateBoard
}