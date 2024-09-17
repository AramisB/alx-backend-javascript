const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    countStudents('./database.csv')
      .then((content) => {
        res.end(`This is the list of our students\n${content}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(1245);

module.exports = server;
