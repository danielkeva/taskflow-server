const bcrypt = require('bcrypt')
const crypto = require('crypto')
const validator = require('validator');
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(email, password) {
    logger.debug(`auth.service - login with email: ${email}`)
    if (!email || !password) return Promise.reject('email and password are required!')

    const user = await userService.getByEmail(email)
    if (!user) return Promise.reject('Invalid email or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid email or password')

    delete user.password;
    return user;
}

async function signup( email, password, firstName, lastName) {
    const hash = await bcrypt.hash(password, saltRounds)
    const md5 = crypto.createHash('md5').update(email).digest('hex');
    try {
        const newUser = await userService.add({ email, password: hash, username: firstName, avatar: md5 })
        return newUser
    } catch (err) {
        console.log('err in signup catch block ')
        throw err
    }
}

module.exports = {
    signup,
    login,
}