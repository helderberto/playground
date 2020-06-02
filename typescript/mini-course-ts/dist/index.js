"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
function resetInputs() {
    input1.value = '';
    input2.value = '';
}
button.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
    resetInputs();
});
