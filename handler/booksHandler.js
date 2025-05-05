const connectDb = require('../db');

async function getAllBooks(req, res) {
    const db = await connectDb();
    const collection = db.collection('perpustakaan');

    const books = await collection.find({}).toArray();
    res.send(books);
}

module.exports = getAllBooks;