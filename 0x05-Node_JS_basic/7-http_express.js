const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs');
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = './database.csv';
  if (fs.existsSync(databasePath)) {
    countStudents(databasePath)
      .then((content) => {
        res.send(`This is the list of our students\n${content}`);
      })
      .catch((error) => {
        res.send(error.message);
      });
  } else {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port);

module.exports = app;
