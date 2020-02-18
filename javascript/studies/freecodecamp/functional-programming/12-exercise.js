function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
const output = nonMutatingSplice(inputCities);
console.log(output);
