function* genNames() {
  console.log('Chamando primeiro nome!');
  yield 'Helder';

  console.log('Chamando segundo nome!');
  yield 'Paula';

  console.log('Chamando terceiro nome!');
  yield 'Panda';
}

const names = genNames();
console.log(names); // => Generator - Status: "suspended"

console.log(names.next()); // => { value: "Helder", done: false }
console.log(names.next()); // => { value: "Paula", done: false }
console.log(names.next()); // => { value: "Panda", done: false }
