const assert = require('assert').strict;

const arr = [1, 2, 3];

const myReduce = function (callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}

Array.prototype.myReduce = myReduce;

const total = arr.myReduce((acc, current) => acc += current, 0);

assert.strictEqual(total, 6, 'Should results 6');
console.log(total);
