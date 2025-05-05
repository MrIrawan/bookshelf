const connectDb = require('../db');

async function storeHandler(req, res) {
    const book = req.body;

    if (!book.title || !book.author || !book.year) {
        return res.status(400).send({ 
            status: 'fail',
            message: 'title, author, and year are required'
        });
    }

    if (book.readPage > book.pageCount) {
        return res.status(400).send({ 
            status: 'fail',
            message: 'read page cannot be greater than page count'
        });
    }


    const finished = book.pageCount === book.readPage;
    const remainingPage = book.pageCount - book.readPage;

    book.finished = finished;
    book.remainingPage = remainingPage;

    const bookSchema = {
        title: book.title,
        author: book.author,
        year: book.year,
        pageCount: book.pageCount,
        readPage: book.readPage,
        finished: book.finished,
        remainingPage: book.remainingPage
    }

    const db = await connectDb();
    const collection = db.collection('perpustakaan');

    const result = await collection.insertOne(bookSchema);
    res.send(result);

}

module.exports = storeHandler;