const express = require('express');

const args = process.argv.slice(2);

const app = express();
const port = 1245;
const countStudents = require('./3-read_file_async');

const DB = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const students = countStudents(DB);
    res.send(`${message}${students.join('\n')}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port);

module.exports = app;
