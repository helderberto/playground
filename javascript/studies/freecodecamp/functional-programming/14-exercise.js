function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
const output = nonMutatingPush(first, second);
console.log(output);
