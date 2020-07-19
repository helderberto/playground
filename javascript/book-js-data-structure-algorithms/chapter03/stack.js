class Stack {
  constructor(items = []) {
    this._items = items;
  }

  push(element) {
    this._items.push(element);
  }

  peek() {
    if (this.isEmpty()) {
      throw Error('Empty Stack.');
    }

    return this._items[this._items.length - 1];
  }

  pop() {
    return this._items.pop();
  }

  isEmpty() {
    return this._items.length === 0;
  }

  clear() {
    this._items = [];
  }

  size() {
    return this._items.length;
  }
}

const books = new Stack();
books.push('Test 01');
books.push('Test 02');
console.log(books.size());
books.pop();
console.log(books.peek()); // => Output: Test 01
