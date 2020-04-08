function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
const outputAnim = sliceArray(inputAnim, 1, 3);

console.log(outputAnim);
