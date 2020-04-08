// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (fixedValue) {
  let value = fixedValue;
  return value += 1;
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4
