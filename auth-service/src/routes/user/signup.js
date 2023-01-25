const express = require('express');
const User = require('../../models/user');
const { body, validationResult } = require('express-validator');

const signupRouter = express.Router();

signupRouter.post(
  '/',
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

    if (existingUser) {
      console.log('email in use');
      return res.send({ message: 'email in use' });
    }

    const user = User.build({ email, password });
    await user.save();

    res.status(200).send(user);
  }
);

module.exports = signupRouter;
