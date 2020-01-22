// ES5
// function getPeoples() {
//   return fetch('http://www.mocky.io/v2/5ce5d4992e000016c2f83f96')
//           .then(data => data.json())
//           .then(data => data.map(people => {
//             console.log(people.name)
//           }));
// }
// getPeoples()

// ES7
async function getPeoplesEs7() {
  const response = await fetch('http://www.mocky.io/v2/5ce5d4992e000016c2f83f96')
  const data = await response.json()

  return data.map(people => {
    console.log(people.name);
  })
}
getPeoplesEs7()

// MULTIPLE PROMISES
async function getUsers(users) {
  const promises = users.map(user => fetch(`https://api.github.com/users/${user}`).then(response => response.json()))

  const people = await Promise.all(promises)
  console.log(people.map(p => p.name));
}

getUsers(['helderburato', 'siddharthkp', 'sophiebits', 'mathiasbynens'])

// ERROR HANDLER
async function getPeoples() {
  try {
    // Wrong URL | Correct: http://www.mocky.io/v2/5ce5d4992e000016c2f83f96
    const response = await fetch('jdksajkdsajkdl6')
    const data = await response.json()

    return data.map(people => {
      console.log(people.name);
    })
  } catch (e) {
    console.log('We got an error!!', e)
  }
}
getPeoples()
