const express = require('express');
const User = require('../../models/user');
const { body, validationResult } = require('express-validator');
const { StandardResponse } = require('@kytickets/common');

const signupRouter = express.Router();

signupRouter.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  async (req, res) => {
    const postErrors = validationResult(req);

    if (!postErrors.isEmpty()) {
      throw new Error('Invalid email or password');
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    const response = new StandardResponse(
      (statusCode = 400),
      (message = 'User already exists'),
      (data = null)
    );

    if (!existingUser) {
      const user = User.build({ email, password });
      await user.save();

      response.data = user;
      response.message = 'User created!';
      response.statusCode = 200;
    }

    res.status(response.statusCode).send(response);
  }
);

module.exports = signupRouter;
