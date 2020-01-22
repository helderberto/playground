let peoples = fetch('http://www.mocky.io/v2/5ce5d4992e000016c2f83f96');
// Promise resolve in 3000
setTimeout(() => {
  console.log(peoples);
}, 3000);

peoples
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
