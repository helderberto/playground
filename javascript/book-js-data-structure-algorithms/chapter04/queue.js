function Queue() {
  let items = [];

  this.enqueue = function (element) {
    items.push(element);
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.front = function () {
    return items[0];
  }

  this.back = function () {
    return items[items.length - 1];
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.size = function () {
    return items.length;
  }

  this.print = function () {
    console.log(items.toString());
  }
}

// const bankQueue = new Queue();
// bankQueue.enqueue('Test 01');
// bankQueue.enqueue('Test 02');
// bankQueue.enqueue('Test 03');
// console.log(bankQueue.front()); // => Test 01
// console.log(bankQueue.back()); // => Test 03
// bankQueue.dequeue();
// console.log(bankQueue.front()); // => Test 02
// bankQueue.print(); // => Test 02,Test 03

module.exports = Queue;
