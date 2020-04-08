function makeSandwich(bread, cheese, salad) {
  console.log(`Your sandwich with ${bread}, ${cheese} and ${salad} is done!`);
}

const ingredients = ['Pão 3 queijos', 'cheddar', 'tomato'];

makeSandwich(...ingredients); // => Your sandwich with Pão 3 queijos, cheddar and tomato is done!
