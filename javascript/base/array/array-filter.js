const arr = [
  {
    name: 'Helder',
    age: 26,
  },
  {
    name: 'Helder',
    age: 26,
  },
  {
    name: 'Paula',
    age: 32,
  }
];

const helder = arr.filter(person => person.name === 'Helder');
console.log(helder); // => [{ name: 'Helder', age: 26 }, { name: 'Helder', age: 26 }]
