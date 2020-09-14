const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getBoards, getBoard,updateBoard} = require('./board.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getBoards)
router.get('/:id', getBoard)
router.put('/:id', updateBoard)
// router.post('/',  requireAuth, addReview)
// router.delete('/:id',  requireAuth, deleteReview)

module.exports = router