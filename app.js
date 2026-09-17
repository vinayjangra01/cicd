const express = require('express');
const app = express();

console.log("hello world")

app.get('/', (req, res) => {
  res.send('Works on my machine.');
});




















console.log("bye world")

module.exports = app;