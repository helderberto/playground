const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: 'dolar', value: 4.03 });
  }, 2000)
});

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Brasil', 'Inglaterra', 'Estados Unidos']);
  }, 600);
});

// All promises will be resolved in 2000ms
Promise
  .all([currency, countries])
  .then(responses => {
    console.log(responses);
  });

// When first promise be resolved, it stops
Promise
  .race([currency, countries])
  .then(response => {
    console.log(responses);
  });
