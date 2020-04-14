const memoize = fn => {
  // Create cache for results
  const results = {};
  return (...args) => {
    // Create a key our cache
    const argsKey = JSON.stringify(args);

    // Only execute function if no cached val
    if (!results[argsKey]) {
      results[argsKey] = fn(...args);
    }
    return results[argsKey];
  }
}

const inefficientSquare = num => {
  let total = 0;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      total++;
    }
  }
  return total;
}

const efficientSquare = memoize(num => {
  let total = 0;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      total++;
    }
  }
  return total;
});

console.group('Inefficient Square')
console.time();
inefficientSquare(40000);
console.timeEnd();

console.time();
inefficientSquare(40000);
console.timeEnd();
console.groupEnd();

console.group('Efficient Square');
console.time();
efficientSquare(40000);
console.timeEnd();

console.time();
efficientSquare(40000);
console.timeEnd();
console.groupEnd();
