const add = require('../src/add.js').add;
const isEqual = require('./test.js').isEqual;

const addTest = function () {
  isEqual(add(2, 3), 5, 'add two positive integers');
  isEqual(add(2, -1), 1, 'add one positive and one negative integer');
}

addTest();

