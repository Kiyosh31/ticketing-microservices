const express = require('express');
const thingsRouter = require('./things');
const usersRouter = require('./users');

const router = express.Router();

router.use('/users', thingsRouter);
router.use('/users', usersRouter);

module.exports = router;
