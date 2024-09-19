Testing with Mocha
This project demonstrates how to use Mocha to write test suites for a Node.js application. It includes examples of using different assertion libraries, spies, stubs, hooks, async functions, and integration testing with a small Node server.

Install the required dependencies:
npm install
This will install Mocha and other necessary packages.

Writing Test Suites
Create a test file named test.js and write your test cases using Mocha's describe and it functions.
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

Using Assertion Libraries
Mocha does not come with built-in assertions. You can use libraries like Node's built-in assert or Chai.

Node's Built-In assert
const assert = require('assert');

describe('Math', function() {
  it('should return 4 when adding 2 and 2', function() {
    assert.strictEqual(2 + 2, 4);
  });
});

Using Chai
Install Chai:
npm install --save-dev chai

Write your tests using Chai:
const chai = require('chai');
const expect = chai.expect;

describe('Math', function() {
  it('should return 4 when adding 2 and 2', function() {
    expect(2 + 2).to.equal(4);
  });
});

Presenting Long Test Suites
Organize long test suites using describe blocks to group related tests and by breaking tests into multiple files based on functionality.
describe('User API', function() {
  describe('GET /users', function() {
    it('should return a list of users', function() {
      // test code here
    });
  });

  describe('POST /users', function() {
    it('should create a new user', function() {
      // test code here
    });
  });
});

Using Spies
Spies track function calls.
Install Sinon:
npm install --save-dev sinon
Create and use spies:

const sinon = require('sinon');

describe('Spy Example', function() {
  it('should call the function once', function() {
    const myFunction = sinon.spy();
    myFunction();
    sinon.assert.calledOnce(myFunction);
  });
});

Using Stubs
Stubs replace functions with controlled behavior.

Create and use stubs:
const sinon = require('sinon');

describe('Stub Example', function() {
  it('should return a predefined value', function() {
    const myObject = {
      myMethod: function() {}
    };
    const stub = sinon.stub(myObject, 'myMethod').returns(42);

    const result = myObject.myMethod();
    assert.strictEqual(result, 42);

    stub.restore();
  });
});

Using Hooks
Hooks are functions that run before or after tests.
describe('Hooks Example', function() {
  before(function() {
    // Runs once before all tests
  });

  beforeEach(function() {
    // Runs before each test
  });

  afterEach(function() {
    // Runs after each test
  });

  after(function() {
    // Runs once after all tests
  });

  it('should do something', function() {
    // test code here
  });
});

Unit Testing with Async Functions
Handle async code with Mocha using async/await:
const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve('data'), 100));
};

describe('Async Test Example', function() {
  it('should resolve with data', async function() {
    const data = await fetchData();
    assert.strictEqual(data, 'data');
  });
});
Integration Testing with a Node Server
Create a Simple Express Server (server.js):
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = app;
Write Integration Tests (test.js):

Install Supertest:
npm install --save-dev supertest

Write integration tests:
const request = require('supertest');
const app = require('./server');

describe('GET /api', function() {
  it('should return a message', async function() {
    const response = await request(app).get('/api');
    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, { message: 'Hello World' });
  });
});

Running Tests
To run the tests, use the following command:
npx mocha