// a program named 1-stdin.js that will be executed
// through command line

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

rl.on('close', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
