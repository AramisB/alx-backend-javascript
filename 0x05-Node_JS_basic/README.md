Node.js Basic
1. Run JavaScript Using Node.js
Node.js allows you to run JavaScript outside of the browser. To execute a JavaScript file:

Create a file, e.g., app.js:
console.log('Hello, Node.js!');

Run it using Node.js:
node app.js

2. Use Node.js Modules
Node.js has built-in and third-party modules to extend functionality.

Example: Using the built-in path module
Create a file, e.g., app.js:
const path = require('path');
console.log(path.basename(__filename)); // Logs the file name

Run the file:
node app.js

3. Use Specific Node.js Module to Read Files
The fs (File System) module is used to read and write files.

Example: Reading a file
Create app.js:
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

Run it:
node app.js

If example.txt contains:
Hello from Node.js!
The output will be: Hello from Node.js!

4. Use Process to Access Command Line Arguments and the Environment
Node.js provides the process object to interact with the environment and command-line arguments.

Example: Accessing Command-Line Arguments
Create app.js:
console.log(process.argv); // Logs command-line arguments

Run it with arguments:
node app.js arg1 arg2

Output:
['node', '/path/to/app.js', 'arg1', 'arg2']
Example: Accessing Environment Variables

Create app.js:
console.log(process.env.NODE_ENV); // Logs the NODE_ENV variable

Run it:
NODE_ENV=development node app.js
Output: development

5. Create a Small HTTP Server Using Node.js
You can create an HTTP server using Node.js's built-in http module.

Example:
Create server.js:
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

Run it:
node server.js
Visit http://localhost:3000 in your browser. You should see Hello, World!.

6. Create a Small HTTP Server Using Express.js
Express.js simplifies creating servers and handling routing.

Example:
Install Express:
npm install express

Create server.js:
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

Run the server:
node server.js
Visit http://localhost:3000 in your browser to see Hello, Express.js!.

7. Create Advanced Routes with Express.js
With Express.js, you can create dynamic and complex routes using URL parameters, query strings, and middleware.

Example:
Create server.js:
const express = require('express');
const app = express();

// Route with a parameter
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  res.send(`Search term: ${req.query.q}`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

Run the server and visit:
http://localhost:3000/users/123 will display User ID: 123.
http://localhost:3000/search?q=Node.js will display Search term: Node.js.

8. Use ES6 with Node.js Using Babel
To use modern ES6 syntax (like import/export) in Node.js, set up Babel.

Steps:
Install Babel:

npm install --save-dev @babel/core @babel/preset-env @babel/node

Create a .babelrc file with:
{
  "presets": ["@babel/preset-env"]
}

Create app.js with ES6 syntax:
import fs from 'fs';
console.log('ES6 syntax in Node.js');

Run the app using Babel:
npx babel-node app.js

9. Use Nodemon to Develop Faster
Nodemon automatically restarts your Node.js application when it detects file changes, speeding up development.

Steps:
Install Nodemon globally or as a dev dependency:
npm install -g nodemon

Run your application with Nodemon:
nodemon app.js
Nodemon will monitor file changes and restart the server without manually stopping and restarting it.
