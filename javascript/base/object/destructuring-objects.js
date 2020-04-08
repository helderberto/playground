const data = {
  name: 'Helder',
  lastname: 'Burato Berto',
  age: 26,
  blog: 'https://helder.dev',
  social: {
    twitter: '@helderburato',
    instagram: '@helder.berto',
  }
};

const { name, lastname } = data;
console.log(name); // => Helder
console.log(lastname); // => Burato Berto

const { twitter, instagram } = data.social;
console.log(twitter); // => @helderburato
console.log(instagram);

const { twitter: tt } = data.social;
console.log(tt);

const {
  city = "Florianópolis",
  state = "Santa Catarina",
} = data;
console.log(city); // => Florianópolis
console.log(state); // => Santa Catarina
