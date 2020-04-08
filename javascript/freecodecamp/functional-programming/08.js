// the global Array
const s = [23, 65, 98, 5];

// Solving using recursion
Array.prototype.myMap = function(callback, arr = [], i = 0){
  return i < this.length ? this.myMap(callback, arr.concat(callback(this[i])), i + 1) : arr;
};

const newS = s.myMap(function(item){
  return item * 2;
});

console.log(newS);
