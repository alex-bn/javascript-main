'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// 164 - Other promise combinators: RACE - ALLSETTLED - ANY.js

// Promise.race

// Receives an array of promises and returns a promise. Promise.race() is settled as soon as one of the input promises settles, a settled promise simply means that a value is available, rejected or fulfilled!

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/iran`),
  ]);
  console.log(res[0]);
})();

// Promise.race() short-circuits whenever one of the promises gets settled

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, seconds * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise.race() & Promise.all() and the two most important promise combinators !!

// Promise.allSettled()
// It takes in an array of promises and it simply returns an array of all the settled promises, no matter if rejected or not

// Promise.all() will short-circuit as soon as one promise rejects but Promise.allSettled() simply never short-circuits

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any() -> takes in an array of multiple promises and return the first fulfilled promise, and it will ignore rejected promises
Promise.any([
  Promise.resolve('Success from .any promise combinator !'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
