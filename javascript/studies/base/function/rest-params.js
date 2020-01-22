// ES5
function multiplyES5(mult, arg1, arg2, arg3) {
  let arr = [];
  arr.push(mult * arg1);
  arr.push(mult * arg2);
  arr.push(mult * arg3);
  return arr;
}
console.log(multiplyES5(2, 1, 2, 3)); // => [2, 4, 6]

// ES6
function multiplyES6(mult, ...args) {
  return args.map(arg => arg * mult)
}
console.log(multiplyES6(2, 1, 2, 3)); // => [2, 4, 6]
