const express = require('express');
const router = require('./routes/index');
// const eventsRouter = require('./routes/events');

const app = express();

// app.use('/api/events', eventsRouter);
app.use('/api', router);

module.exports = app;
