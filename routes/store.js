const express = require('express');
const router = express.Router();
const storeHandler = require('../handler/storeHandler');

router.post('/store', storeHandler);

module.exports = router;