const boardService = require('../api/board/board.service');
const userService = require('../api/user/user.service');
const logger = require('../services/logger.service');

async function requireAuth(req, res, next) {
    console.log('request', req);
    if (!req.isAuthenticated()) {
        console.log('no auth');
        res.status(401).end('Unauthorized!');
        return;
    }
    next();
}
async function requireBoardAuth(req, res, next) {
    console.log('params.id', req.params.id);
    try {
        const board = await boardService.getById(req.params.id);
        if (!board.isPrivate) {
            console.log('board is public everyone can see it');
            next();
        } else if (board.isPrivate && req.isAuthenticated()) {
            const userId = req.session.passport.user;
            console.log('userId', userId);
            const user = await userService.getById(userId);
            console.log('user', user);
            const matchBoardId = user.boards.find(boardId => boardId === req.params.id);
            console.log('matchBoardId', matchBoardId);

            if (matchBoardId) {
                console.log('User is a member of this board ');
                next();
            } else {
                console.log('User is not a member of this board');
                res.status(401).end('Unauthorized!'); // if the User isn't a member of this board
                return;
            }
        } else {
            console.log('User is not authenticated');
            res.status(401).end('Unauthorized!'); // if the User isn't authenticated
            return;
        }
    } catch (err) {
        logger.error('Cannot find the board', err);
        res.status(404).send("Board wasn't found");
    }
}

async function requireAdmin(req, res, next) {
    const user = req.session.user;
    if (!user.isAdmin) {
        res.status(403).end('Unauthorized Enough..');
        return;
    }
    next();
}

// module.exports = requireAuth;

module.exports = {
    requireAuth,
    requireAdmin,
    requireBoardAuth,
};
