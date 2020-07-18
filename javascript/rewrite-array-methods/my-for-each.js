const arr = [1, 2, 3];
// arr.forEach(function (item, index, array) {
//   console.log('item', item);
//   console.log('index', index);
//   console.log('array', array);
// });

const myCustomForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.myCustomForEach = myCustomForEach;

arr.myCustomForEach(function (item, index, array) {
  console.log('index', index);
  console.log('item', item);
  console.log('array', array);
});
