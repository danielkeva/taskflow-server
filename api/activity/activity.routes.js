const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { updateActivity, getActivities } = require('./activity.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.post('/',  createActivity)
router.get('/:id', getActivities)
router.put('/:id', updateActivity)

module.exports = router