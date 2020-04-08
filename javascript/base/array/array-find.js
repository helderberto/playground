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

const helder = arr.find(person => person.name === 'Helder');
console.log(helder); // => { name: 'Helder', age: 26 }

const helderIndex = arr.findIndex(person => person.name === 'Paula');
console.log(helderIndex); // => 1
