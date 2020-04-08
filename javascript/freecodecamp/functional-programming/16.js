const squareList = arr => {
  const filtered = arr.filter(num => num > 0 && Number.isInteger(num)).map(num => Math.pow(num, 2));
  return filtered;
};

const squareListReduce = arr => {
  const reduced = arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0 ? sqrIntegers.concat(num * num) : sqrIntegers;
  }, []);
  return reduced;
}

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers2 = squareListReduce([-3, 4.8, 5, 3, -3.2]);
