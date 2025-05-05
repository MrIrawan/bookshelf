const express = require('express');
const router = express.Router();

const { getAllBooks, getFinishedBooks, getUnfinishedBooks } = require('../handler/booksHandler');

router.get('/books', getAllBooks);
router.get('/books/finished', getFinishedBooks);
router.get('/books/unfinished', getUnfinishedBooks);

module.exports = router;