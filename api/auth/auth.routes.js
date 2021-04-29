const express = require('express');
const { requireAuth } = require('../../middlewares/requireAuth.middleware');
const { login, signup, logout, getLogin } = require('./auth.controller');
const config = require('../../config');
const passport = require('passport');

const router = express.Router();

router.post('/login', login);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
    res.redirect(`${config.baseUrl}/${req.user.username}/boards`);
});

router.get('/login', requireAuth, getLogin);

router.post('/signup', signup);

router.post('/logout', requireAuth, logout);

module.exports = router;
