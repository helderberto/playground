function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
const output = nonMutatingConcat(first, second);

console.log(output);
