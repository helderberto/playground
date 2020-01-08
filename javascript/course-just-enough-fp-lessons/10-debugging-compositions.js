const { compose, map, split, join, lowerCase } = require("./shared");

const bookTitles = ["The Culture Code", "Clean Coder", "Pragmatic Programmer"];

const trace = msg => x => (console.log(msg, x), x);

const slugify = map(
  compose(
    trace("after join"),
    join("-"),
    trace("after split"),
    split(" "),
    trace("after lowercase"),
    lowerCase,
    trace("before lowercase")
  )
);

const slugs = slugify(bookTitles);

console.log(slugs);
