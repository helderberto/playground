// Composition

const f = x => x + 2;
const g = x => x * 3;

console.log(f(g(5))); // => 17

const replaceHello = str => str.replace("Hello", "Helder");
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// console.log(repeat(exclaim(scream(replaceHello("Hello World"))))); // => HELDER WORLD! HELDER WORLD!

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream,
  replaceHello
);

// console.log(withExuberance("Hello World")); // => HELDER WORLD! HELDER WORLD!

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const withExuberance2 = pipe(
  replaceHello,
  scream,
  exclaim,
  repeat
);

// console.log(withExuberance2("Hello World")); // => HELDER WORLD! HELDER WORLD!
