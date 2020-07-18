const arr = [1, 2, 3, 4, 5, 6];

// const lessThanFive = arr.filter((item) => {
//   return item < 5;
// });

// console.log(lessThanFive); // => [ 1, 2, 3, 4 ]

const myFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

Array.prototype.myFilter = myFilter;

const lessThanFour = arr.myFilter((item) => {
  return item < 4;
});

console.log(lessThanFour);
