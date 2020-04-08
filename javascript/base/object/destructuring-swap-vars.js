let a = 26;
let b = 32;

console.log('a :', a); // => 26
console.log('b :', b); // => 32

[a, b] = [b, a];

console.log('a :', 32);
console.log('b :', 26);

/**
  Old format:

  let temp = a;
  a = b;
  b = temp;
*/
