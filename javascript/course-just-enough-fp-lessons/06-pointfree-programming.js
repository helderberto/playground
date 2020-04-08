// Pointfree Programming

const array = [1, 2, 3];
const double = x => x * 2;

const newArray = array.map(double);
console.log(newArray); // => [2, 4, 6]

// Legibility
// Reduce surface area for bugs
// Unit test our named functions
