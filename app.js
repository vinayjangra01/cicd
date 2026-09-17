const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Works on all machine.');
});

module.exports = app;