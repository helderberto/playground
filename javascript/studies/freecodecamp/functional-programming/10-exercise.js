// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArr = [];

  this.forEach(item => {
    if (callback(item) === true) {
      newArr.push(item);
    }
  });

  return newArr;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);
