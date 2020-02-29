function checkPositive(arr) {
  return arr.some(value => value > 0);
}
checkPositive([1, 2, 3, -4, 5]);
