const logger = require('../../services/logger.service')
const boardService = require('./board.service')

async function getBoards(req, res) {
    const { user } = req.session.passport
    console.log('userid', user);
    try {
        const boards = await boardService.query(user)
        res.send(boards)
    } catch (err) {
        res.status(404).send({ status: 'error', error: 'Boards wasn\'t found' })
    }
}
async function getBoard(req, res) {
    try {
        const board = await boardService.getById(req.params.id)
        res.json(board)
    } catch (err) {
        logger.error('Cannot find the board', err);
        res.status(404).send({ status: 'error', error: 'Board wasn\'t found' })
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

async function addBoard(req, res) {
    try {
        const board = await boardService.add(req.body)
        res.json(board)
    } catch (err) {
        logger.error('Cannot add board', err);
        throw err
    }
}
// async function deleteReview(req, res) {
//     await boardService.remove(req.params.id)
//     res.end()
// }


module.exports = {
    getBoards,
    getBoard,
    updateBoard,
    addBoard
}