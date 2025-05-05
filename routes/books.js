const express = require('express');
const router = express.Router();

const getAllBooks = require('../handler/booksHandler');

router.get('/books', getAllBooks);

module.exports = router;