const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DB = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const intro = 'This is the list of our students\n';
  try {
    const students = await countStudents(DB);
    res.send(`${intro}${students.join('\n')}`);
  } catch (error) {
    res.send(`${intro}${error.message}`);
  }
});

app.listen(port);

module.exports = app;
