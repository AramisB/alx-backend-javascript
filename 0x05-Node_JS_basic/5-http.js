const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async'); // Reuse the logic from 3-read_file_async.js

// Create a server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Route for "/"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Route for "/students"
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Retrieve the student list from a CSV file
    const databasePath = './database.csv'; // Make sure this file exists in the same directory
    if (fs.existsSync(databasePath)) {
      countStudents(databasePath)
        .then((content) => {
          res.end(`This is the list of our students\n${content}`);
        })
        .catch((error) => {
          res.end(error.message);
        });
    } else {
      // If the database is missing
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    // 404 - Not Found for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Server listening on port 1245
app.listen(1245);

// Export the app (useful for testing)
module.exports = app;
