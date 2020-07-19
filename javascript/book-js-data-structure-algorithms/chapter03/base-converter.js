const Stack = require('./stack');

function baseConverter(decNumber, base) {
  let remStack = new Stack();
  let rem = '';
  let baseString = '';
  let digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

// console.log(baseConverter(100345, 2)); // => 11000011111111001

module.exports = baseConverter;
