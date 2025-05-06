const express = require('express');
const router = express.Router();

const { getAllBooks, getFinishedBooks, getUnfinishedBooks, getBookById } = require('../handler/booksHandler');

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.get('/books/finished', getFinishedBooks);
router.get('/books/unfinished', getUnfinishedBooks);

module.exports = router;