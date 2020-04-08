const txt = 'Brasil'; // iterable
const it = txt[Symbol.iterator](); // iterator

console.log(it.next()); // => { value: "B", done: false }
console.log(it.next()); // => { value: "r", done: false }
console.log(it.next()); // => { value: "a", done: false }
console.log(it.next()); // => { value: "s", done: false }
console.log(it.next()); // => { value: "i", done: false }
console.log(it.next()); // => { value: "l", done: false }
console.log(it.next()); // => { value: undefined, done: true }

for (letter of txt) {
  console.log(letter);
  if (letter === 'a') break;
}
