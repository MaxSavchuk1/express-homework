const express = require('express');
const validate = require('./middleware/validate');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
