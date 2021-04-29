const express = require('express');
const { requireAuth, requireAdmin, requireBoardAuth } = require('../../middlewares/requireAuth.middleware');
const { getBoards, getBoard, updateBoard, addBoard } = require('./board.controller');
const router = express.Router();

router.get('/', requireBoardAuth, getBoards);
router.get('/:id', getBoard);
// router.get('/:id',requireAuth, getBoard)
router.post('/', requireAuth, addBoard);
router.put('/:id', updateBoard);
// router.post('/',  requireAuth, addReview)
// router.delete('/:id',  requireAuth, deleteReview)

module.exports = router;
