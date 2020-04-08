// Unique values
let foo = Symbol('name');
let bar = Symbol('name');

console.log(foo === bar); // => false

let obj = {
  [Symbol('name')]: 'Helder',
  [Symbol('age')]: 26,
  city: 'Florianópolis',
}

console.log(Object.keys(obj)); // => ["city"]
console.log(Object.getOwnPropertySymbols(obj)); // => [Symbol(name), Symbol(age)]

const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map(sym => obj[sym]);
console.log(data); // => ["Helder", 26]
