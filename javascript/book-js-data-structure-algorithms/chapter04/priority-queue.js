function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.checkPriority = function (oldElementPriority, newElementPriority) {
    if (oldElementPriority > newElementPriority) {
      return true;
    }
    return false;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < items.length; i++) {
      if (this.checkPriority(items[i].priority, queueElement.priority)) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.size = function () {
    return items.length;
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.front = function () {
    return items[0];
  }

  this.back = function () {
    return items[items.length - 1];
  }

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`Element: "${items[i].element}" | Priority: "${items[i].priority}"`);
    }
  }
}

// const bankQueue = new PriorityQueue();
// bankQueue.enqueue('Test 01', 2);
// bankQueue.enqueue('Test 02', 2);
// bankQueue.enqueue('Test 03', 1);
// bankQueue.print();
// console.log(bankQueue.front()); // => QueueElement { element: 'Test 03', priority: 1 }

module.exports = PriorityQueue;
