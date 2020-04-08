function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  }
}

module.exports = createStack;

// const books = createStack();
// books.push('The Pragmatic Programmer');
// books.push('Clean Coder');
// books.push('Clean Code');
// books.push('Clean Architecture');
// console.log(books.pop()) // => Clean Architecture
// console.log(books.pop()); // => Clean Code
// console.log(books.pop()); // => Clean Coder
// console.log(books.peek()); // => The Pragmatic Programmer
// books.pop();
// console.log(books.isEmpty()); // => true
