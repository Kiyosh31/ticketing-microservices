const express = require('express');

const signinRouter = require('./user/signin');
const signupRouter = require('./user/signup');

const router = express.Router();

router.use('/users', signinRouter);
router.use('/users', signupRouter);

module.exports = router;
