// Argument Order

const map = cb => array => array.map(cb);

const arr = [1, 2, 3, 4];
const double = n => n * 2;

const withDouble = map(double);

console.log(withDouble(arr));
console.log(withDouble([2, 4, 6, 8, 10]));

// Most specific => least specific

const prop = key => obj => obj[key];

const propName = prop("name");
const people = [
  {
    name: "Helder"
  },
  {
    name: "Paula"
  },
  {
    name: "Marli"
  },
  {
    name: "Salete"
  }
];

console.log(map(propName)(people));
