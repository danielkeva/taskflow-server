
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId




async function query(userId) {
    // const criteria = _buildCriteria(filterBy)
    const criteria = {}
    const collection = await dbService.getCollection('board')
    try {
        const boards = await collection.find({ "users": userId }).toArray();
        return boards
    } catch (err) {
        console.log('ERROR: cannot find boards')
        throw err;
    }
}


async function getById(id) {
    const collection = await dbService.getCollection('board')
    try {
        const board = await collection.findOne({ "_id": ObjectId(id) })
        return board
    } catch (err) {
        console.log(`ERROR: while finding board ${id}`)
        throw err;
    }
}

async function update(board) {
    const collection = await dbService.getCollection('board')
    board._id = ObjectId(board._id);
    try {
        await collection.replaceOne({ "_id": board._id }, { $set: board })
        return board
    } catch (err) {
        console.log(`ERROR: cannot update board ${board._id}`)
        throw err;
    }
}
async function add(board) {
    const collection = await dbService.getCollection('board')
    try {
        await collection.insertOne(board);
        return board;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

// async function remove(reviewId) {
//     const collection = await dbService.getCollection('board')
//     try {
//         await collection.deleteOne({ "_id": ObjectId(reviewId) })
//     } catch (err) {
//         console.log(`ERROR: cannot remove board ${reviewId}`)
//         throw err;
//     }
// }



function _buildCriteria(filterBy) {
    const criteria = {};
    return criteria;
}

module.exports = {
    query,
    getById,
    update,
    add
}


