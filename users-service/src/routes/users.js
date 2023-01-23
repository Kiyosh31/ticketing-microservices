const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/here', (req, res) => {
  res.status(200).send('hello there no mames que ya funciona!');
});

module.exports = usersRouter;
