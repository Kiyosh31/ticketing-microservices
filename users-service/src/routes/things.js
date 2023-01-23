const express = require('express');
const thingsRouter = express.Router();

thingsRouter.get('/things', (req, res) => {
  res.status(200).send('things!');
});

module.exports = thingsRouter;
