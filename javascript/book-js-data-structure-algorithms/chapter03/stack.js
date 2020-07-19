function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  }

  this.pop = function () {
    return items.pop();
  }

  this.size = function () {
    return items.length;
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.peek = function () {
    return items[items.length - 1];
  }

  this.clear = function () {
    items = [];
  }
}

// const books = new Stack();
// books.push('Test 01');
// books.push('Test 02');
// console.log(books.size());
// books.pop();
// console.log(books.peek()); // => Output: Test 01

module.exports = Stack;
