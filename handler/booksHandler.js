const connectDb = require('../db');

async function getAllBooks(req, res) {
    const db = await connectDb();
    const collection = db.collection('perpustakaan');

    const books = await collection.find({}).toArray();
    res.status(200).send({
        status: true,
        message: 'success get all books',
        data: books
    });
}

async function getFinishedBooks(req, res) {
    const db = await connectDb();
    const collection = db.collection('perpustakaan');

    const finishedBooks = await collection.find({ finished: true }).toArray();
    res.status(200).send({
        status: true,
        message: 'success get all finished books',
        data: finishedBooks
    });
}

async function getUnfinishedBooks(req, res) {
    const db = await connectDb();
    const collection = db.collection('perpustakaan');

    const unfinishedBooks = await collection.find({ finished: false }).toArray();
    res.status(200).send({
        status: true,
        message: 'success get all unfinished books',
        data: unfinishedBooks
    });
}


module.exports = { getAllBooks, getFinishedBooks, getUnfinishedBooks };