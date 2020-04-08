let front = ['react', 'vuejs', 'angular'];
let back = ['python', 'nodejs', 'ruby'];

let fullStack = [ ...front, 'lodash', ...back ];

console.log([...'Helder']); // => ['H', 'e', 'l', 'd', 'e', 'r']
console.log(...front); // => react vuejs angular
console.log(...back); // => python nodejs ruby
console.log(...fullStack); // => react vuejs angular lodash python nodejs ruby
