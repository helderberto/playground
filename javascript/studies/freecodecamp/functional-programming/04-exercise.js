// the global variable
var fixedValue = 4;

function incrementer () {
  let value = fixedValue;
  return value += 1;
}

var newValue = incrementer(); // Should equal 5
console.log(newValue)
console.log(fixedValue); // Should print 4
