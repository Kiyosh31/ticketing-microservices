const express = require('express');
const eventsRouter = express.Router();

eventsRouter.get('/', (req, res) => {
  res.status(200).send('events!');
});

module.exports = eventsRouter;
