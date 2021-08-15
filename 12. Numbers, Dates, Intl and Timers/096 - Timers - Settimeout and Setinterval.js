'use strict';
// ! TIMERS

// 1 SETTIMEOUT - > runs just once after a defined time, can be used to execute some code at some point in the future

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your delayed pizza-code 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // asynchronous function
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// 2 SETINTERVAL - > keeps running basically forever

setInterval(function () {
  const now = new Date();
  const options = {
    hours: 'numeric',
    minutes: 'numeric',
    seconds: 'numeric',
  };
  console.log(new Intl.DateTimeFormat(navigator.language, options).format(now));

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  console.log(`${h}:${m}:${s}`);
}, 1000);
