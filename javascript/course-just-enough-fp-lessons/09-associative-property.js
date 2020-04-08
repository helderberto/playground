// Associative Property

const { compose, scream, exclaim, repeat } = require("./shared");

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

const str = "I love programming";

console.log(withExuberance(str)); // => I LOVE PROGRAMMING! I LOVE PROGRAMMING!

const repeatExcitedly = compose(
  repeat,
  exclaim
);

console.log(
  compose(
    repeatExcitedly,
    scream
  )(str)
); // => I LOVE PROGRAMMING! I LOVE PROGRAMMING!

const screamLoudly = compose(
  exclaim,
  scream
);

console.log(
  compose(
    repeat,
    screamLoudly
  )(str)
); // => I LOVE PROGRAMMING! I LOVE PROGRAMMING!
