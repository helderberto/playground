let mySet = new Set(['Helder', 'Paula']);

mySet.add('Panda');
mySet.add('Pantufa');

mySet.delete('Helder');

console.log(mySet.has('Helder')); // => false
console.log(mySet.has('Paula')); // => true

console.log(mySet[1]); // => undefined

let iterator = mySet.values();

console.log(iterator.next());

for (name of iterator) {
  console.log(name);
}
