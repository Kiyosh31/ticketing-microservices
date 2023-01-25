const express = require('express');
const User = require('../../models/user');
const { body, validationResult } = require('express-validator');
const { StandardResponse } = require('@kytickets/common');

const signinRouter = express.Router();

signinRouter.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password length must be between 4 and 20 characters'),
  ],
  async (req, res) => {
    const postErrors = validationResult(req.body);

    if (!postErrors.isEmpty()) {
      throw new Error('Invalid email or password');
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    const standardResponse = new StandardResponse(
      (statusCode = 200),
      (message = 'User found'),
      (data = existingUser)
    );

    if (!existingUser) {
      standardResponse.message = "The user wasn't found";
      standardResponse.statusCode = 400;
      standardResponse.data = null;
    }

    res.status(standardResponse.statusCode).json(standardResponse);
  }
);

module.exports = signinRouter;
