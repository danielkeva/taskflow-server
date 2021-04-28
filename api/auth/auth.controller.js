const passport = require('passport')
const userService = require('../user/user.service')
const validator = require('validator')
const authService = require('./auth.service')
const logger = require('../../services/logger.service')

function login(req, res, next) {
  const validationErrors = []
  const { email, password } = req.body
  if (!validator.isEmail(email))
    validationErrors.push('Please enter a valid email address.')
  if (validator.isEmpty(password))
    validationErrors.push('Password cannot be blank.')
  if (validationErrors.length) {
    res.status(400).send(validationErrors)
    return
  }
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json(err)
    }
    if (!user) {
      console.log('!user deep', info.message)
      return res.status(401).send(info.message)
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      res.json(user)
    })
  })(req, res, next)
}

async function signup(req, res, next) {
  const { email, password, firstName, lastName } = req.body
  const validationErrors = []
  if (!validator.isEmail(email))
    validationErrors.push('Please enter a valid email address.')
  if (!validator.isLength(password, { min: 8 }))
    validationErrors.push('Password must be at least 8 characters long')
  if (validationErrors.length) {
    res.status(400).send(validationErrors)
    return
  }
  const existUser = userService.getByEmail(email)
  if (existUser) {
    return res
      .status(409)
      .send('Account with that email address already exists')
  }
  try {
    console.log('no errors here')
    const newUser = await authService.signup(
      email,
      password,
      firstName,
      lastName
    )
    req.logIn(newUser, (err) => {
      if (err) {
        return next(err)
      }
      res.json(newUser)
    })
  } catch (err) {
    logger.error('[SIGNUP] ' + err)
    console.log('errr', err.res)
    res.status(500).end('cannot insert user')
  }
}

async function getLogin(req, res, next) {
  // if (req.isAuthenticated()) {
  const userId = req.session.passport.user
  try {
    const user = await userService.getById(userId)
    return res.json(user)
  } catch (err) {
    logger.error('[getlogin] ' + err)
    console.log('errr', err.res)
    res.status(500).end('cannot find user')
  }
}

function logout(req, res) {
  req.logout()
  req.session.destroy((err) => {
    if (err)
      console.log('Error : Failed to destroy the session during logout.', err)
    req.user = null
    res.send({ message: 'logged out successfully' })
  })
}

module.exports = {
  login,
  signup,
  logout,
  getLogin,
}
