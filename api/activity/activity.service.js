const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query(boardId) {
    const collection = await dbService.getCollection('activity')
    try {
        // const boardActivity = await collection.findOne({ boardId: boardId })
        const boardActivity = await collection.findOneAndUpdate(
            { boardId: boardId },
            { $set: { boardId, activities: [] } },
            {
                returnNewDocument: true,   // return new doc if one is upserted
                upsert: true // insert the document if it does not exist
            }
        )

        return boardActivity.activities
    } catch (err) {
        throw err;
    }
}
async function update(boardId, activity) {
    const collection = await dbService.getCollection('activity')
    try {
        await collection.updateOne(
            { boardId: boardId },
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


