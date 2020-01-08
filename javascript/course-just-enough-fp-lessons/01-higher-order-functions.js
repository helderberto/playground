const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count: ${++count}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log("countedAdd(1, 2)", countedAdd(1, 2));
console.log("countedAdd(2, 2)", countedAdd(2, 2));
console.log("countedAdd(3, 2)", countedAdd(3, 2));
