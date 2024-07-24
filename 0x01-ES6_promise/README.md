JavaScript Promises and Async/Await
Introduction
This document provides an overview of JavaScript Promises, including how they work, why they are useful, and how to use them effectively. It also covers the try / catch mechanism, the await operator, and async functions, with practical examples.

What are Promises?
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a way to handle asynchronous operations more cleanly compared to traditional callback-based approaches.

Why Use Promises?
Promises are used to handle asynchronous operations without blocking the main thread. They help avoid callback hell and make the code more readable and maintainable.

Creating a Promise
A Promise can be created using the Promise constructor, which takes a function with resolve and reject parameters.

let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success/failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

Using then and catch
then
The then method is used to handle the successful resolution of a Promise.

myPromise.then((message) => {
  console.log(message); // "Operation was successful!"
});

catch
The catch method is used to handle errors or rejection of a Promise.
myPromise
  .then((message) => {
    console.log(message); // "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed."
  });

Promise Methods
Promise.all
Waits for all promises to be fulfilled or any to be rejected.

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});

Promise.race
Returns a promise that resolves or rejects as soon as one of the promises resolves or rejects.
let promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "one");
});
let promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});

Promise.allSettled
Waits for all promises to either be fulfilled or rejected.
let promise1 = Promise.resolve('Success');
let promise2 = Promise.reject('Error');
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'Finally done');
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => console.log(result.status));
  // "fulfilled", "rejected", "fulfilled"
});
Promise.any
Returns the first fulfilled promise.
let promise1 = Promise.reject('Error');
let promise2 = Promise.reject('Another error');
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'First Success');
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // "First Success"
});
Try / Catch
The try / catch mechanism is used to handle exceptions in both synchronous and asynchronous code.
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error(error.message); // "Something went wrong!"
}
The await Operator
The await operator pauses the execution of an async function until the promise is resolved or rejected. It can only be used inside async functions.
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();

Using async Functions
Async functions are declared with the async keyword and always return a Promise.

async function exampleAsyncFunction() {
  return "Hello, World!";
}

exampleAsyncFunction().then((message) => {
  console.log(message); // "Hello, World!"
});

Combining async and await
Using async and await together for cleaner asynchronous code.

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

Basic Promise Example
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

promise
  .then((message) => {
    console.log(message); // "Success!"
  })
  .catch((error) => {
    console.error(error); // "Failure!"
  });

Using Promise.all
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
Using async and await
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
This README provides an overview and examples of Promises, async functions, and the await operator in JavaScript, which are essential tools for handling asynchronous operations.