const arr = [1, 2, 3];

// const newArr = arr.map(function (item, index, array) {
//   console.log('index', index);
//   console.log('item', item);
//   console.log('array', array);

//   return item + 1;
// });

const myMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i], i, this);
  }

  return newArray;
}

Array.prototype.myMap = myMap;

const newArr = arr.myMap((item, index, current) => {
  console.log('item', item);
  console.log('index', index);
  console.log('current', current);

  return item * 2;
});

console.log(newArr);
