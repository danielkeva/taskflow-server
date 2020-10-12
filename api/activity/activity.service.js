const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query(boardId) {
    const collection = await dbService.getCollection('activity')
    try {
        const boardActivity = await collection.findOne({ boardId: ObjectId(boardId) })
        return boardActivity.activities
    } catch (err) {
        console.log(`ERROR: cannot update`)
        throw err;
    }
}
async function update(boardId, activity) {
    const collection = await dbService.getCollection('activity')
    try {
        await collection.updateOne(
            { boardId: ObjectId(boardId) },
            {
                $push: {
                    activities: {
                        $each: [activity],
                        $position: 0
                    }
                }
            }
        )
        return activity
    } catch (err) {
        console.log(`ERROR: cannot update`)
        throw err;
    }
}



module.exports = {
    query,
    // getById,
    update
}


