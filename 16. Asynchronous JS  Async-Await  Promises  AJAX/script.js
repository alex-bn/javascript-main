'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// COORS -> Cross origin Resource Sharing
// AJAX -> Asynchronous JavaScript and XML

// old school AJAX calls -> XMLHttpRequest function
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText); returns a JSON object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//       <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//   </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

// Callback hell:

// const getCountryAndNeighbor = function (country) {
//   // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get neighbor country (2)
//     const [neighbor] = data.borders;

//     // if the country has no neighbors
//     if (!neighbor) return;

//     // AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   // write code here
// }, 5000); // timeout

////////////////////////////////////////////
// How it used to work:
// const request = new XMLHttpRequest();
// request.open(`https:/restcountries.eu/rest/v2/name${country}`);
// request.send();

// How we can do it now:
// const request = fetch('https:/restcountries.eu/rest/v2/name/portugal');
// console.log(request);

// Fetch API returns promise / Fetch API builds a promise
////////////////////////////////////////////

// Consuming promises:

// const getCountryData = function (country) {
//   fetch(`https:/restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('portugal');

// const getCountryData = function (country) {
//   fetch(`https:/restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

//Chaining promises:

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https:/restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dsadad';
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour')) // .then gets executed only if the promise is fulfilled
//     .catch(err => {
//       // .catch gets executed in the case of rejection
//       console.error(`${err} !!!!`);
//       renderError(`Something went wrong..${err.message}`);
//     })
//     .finally(() => {
//       // only works if .catch returns a promise
//       countriesContainer.style.opacity = 1;
//     });
// };

// A promise in which an error happened is a rejected promise
// The only way in which the fetch promise rejects is when the user looses its internet connection

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https:/restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found '
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} !!!!`);
      renderError(`Something went wrong..${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
// getCountryData('portugal');
// });
// getCountryData('australia');

////////////////////////////////////////////////////////////////

// getCurrentPosition takes 2 functions, success and error functions

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(latitude, longitude);
//       console.log(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
//     },
//     function () {
//       alert('Could not get coordinates..');
//     }
//   );

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} ***`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Event Loop in practice:

// console.log('Test start');
// setTimeout(() => console.log('1 second timer'), 1);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end.');

// Can you guess the order ?

// Top level code -> code outside of any callback  =>  will run first

// Between the timer and the resolved promise is a bit tricky:
// both the timer and the resolved promise will finish at the exact same time, so right after 0 seconds, the timers callback will be put on the callback queue first but it will be executed only after the callback of the resolved promise! the callback of the resolved promise  will be put on the microtask queue and this microtask queue has priority over the callback queue
/*

1 -> Test start
2 -> Test end
3 -> Resolved promise 1
4 -> Resolved promise 2 -> just to prove that the nr of seconds is not a guarantee 
4 -> 1 second timer

*/

// the number seconds time of the setTimeout() function is not a guarantee that the callback will be fired after 1 second, if the the callback before the setTimeout has precedence and need a longer time to execute then the setTimeout() callback will be fired when the previous one is done

////////////////////////////////////////////////////////////////

// Simulate a lottery

// a fulfilled promise means to win the lottery and a rejected one means to loose

// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>

// Building a promise:

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //
//   console.log('Lottery draw is happening 🤞');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN ✨');
//     } else {
//       reject(new Error('You lost..🤨'));
//     }
//   }, 2000);
// });

// Consuming promises:

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisefying means to convert callback based asynchronous behaviour to promise based:
// a function that returns a promise, promisefying setTimeout()

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// the above code translate to:

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 5 seconds'));

// ... when using promises

// Create a fulfilled or rejected promise immediately:

// Promise.resolve(
//   'Just Pass The Resolved Value And You Promise Will Resolve Immediately'
// ).then(res => console.log(res));

// Promise.reject(
//   'Just Pass The Rejected Value And You Promise Will Reject Immediately'
// ).catch(err => console.log(err));

// Promise.reject(new Error('Rejected Promise')).catch(err => console.log(err));

////////////////////////////////
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__ === Array.prototype);

////////////////////////////////
// Promisifying the geolocation API

// using async code:
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);

console.log('Getting position..');
///

// promisiying the function:

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    // ..equivalent to:

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} ***`));
};

// btn.addEventListener('click', whereAmI);

//////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/
