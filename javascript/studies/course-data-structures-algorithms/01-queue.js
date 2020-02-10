function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      // Add item to the beginning of an array and return length of array
      return queue.unshift(item);
    },
    dequeue() {
      // Removes the last element from an array and return that element
      return queue.pop();
    },
    peek() {
      // Element from top of the array
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}

const q = createQueue();
console.log(q.isEmpty()); // => true
q.enqueue('Helder');
q.enqueue('Paula');
q.enqueue('Panda');
q.enqueue('Pantufa');
console.log(q.peek()) // => Helder
console.log(q.length); // => 4
q.dequeue(); // => Helder
console.log(q.peek()); // => Paula
q.dequeue();
console.log(q.peek()); // => Panda
