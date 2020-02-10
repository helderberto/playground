const createQueue = require('./01-queue');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return (highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty());
    }
  }
}

module.exports = createPriorityQueue;

const q = createPriorityQueue();
q.enqueue('Helder');
q.enqueue('Paula');
q.enqueue('Panda', true);
console.log(q.peek()); // => Panda
q.dequeue();
console.log(q.peek()); // => Helder
