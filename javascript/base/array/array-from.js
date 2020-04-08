const list = document.querySelectorAll('.peoples li');
const listArray = Array.from(list);

const names = listArray.map(people => {
  return people.textContent
});
console.log(names); // => ['Helder', 'Paula']
