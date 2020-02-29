function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
}
const output = alphabeticalOrder(["x", "h", "a", "m", "n", "m"]);
console.log(output);
