const logger = require('../../services/logger.service')
const activityService = require('./activity.service')

async function getActivities(req, res) {
    try {
        const activities = await activityService.query(req.params.id)
        res.json(activities)
    } catch (err) {
        logger.error('Cannot get activities', err);
        res.status(500).send({ error: 'cannot get activities' })

    }
}

async function updateActivity(req, res) {
    try {
        const activity = await activityService.update(req.params.id, req.body)
        res.json(activity)
    } catch (err) {
        logger.error('Cannot get activity', err);
        res.status(500).send({ error: 'cannot get activity' })
    }
}

module.exports = {
    updateActivity,
    getActivities
}