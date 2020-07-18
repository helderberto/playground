const arr = [3, 2, 1];

const mySort = function (callback) {
  const newArray = [...this];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - 1; j++) {
      if (callback(newArray[j], newArray[j + 1]) > 0) {
        const tempArr = newArray[j + 1];
        newArray[j + 1] = newArray[j];
        newArray[j] = tempArr;
      }
    }
  }
  return newArray;
}

Array.prototype.mySort = mySort;

console.log(arr.mySort((current, next) => current - next));
