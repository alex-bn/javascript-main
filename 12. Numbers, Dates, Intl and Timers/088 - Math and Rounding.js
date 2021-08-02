'use strict';

// another known namespace: Math

console.log(Math.sqrt(25));
// equivalent to
console.log(25 ** (1 / 2));

// cubic root
console.log(8 ** (1 / 3));

console.log(Math.max(5, 19, 67, 9, 1));
console.log(Math.max(5, 19, '67', 9, 1)); // it performs type coercion
console.log(Math.max(5, 19, '67px', 9, 1)); // however it does not perform parsing

console.log(Math.min(5, 19, 67, 9, 1));

console.log(Math.PI);

//calculate the area of a circle with the radius of 10px -> π * R**2
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1); // gives a random number between 0 and 6

// generalize the function that gives a random number between a given range
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
randomInt(1, 5);

// Rounding integers //
console.log(Math.trunc(23.345)); // removes any decimal part

console.log(Math.round(23.6)); // rounds to the nearest integer -> 24
console.log(Math.round(23.1)); // rounds to the nearest integer -> 23

console.log(Math.ceil(23.2)); // rounds up -> 24
console.log(Math.ceil(23.8)); // rounds up -> 24

console.log(Math.floor(23.1)); // rounds down -> 23
console.log(Math.floor(23.9)); // rounds down -> 23

// -- ALL OF THESE METHODS ALSO DO TYPE COERCION -- //

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); // with negative numbers rounding works the other way around

// Rounding decimals //
console.log((2.7).toFixed(0)); // always returns a string and not a number
console.log((2.7).toFixed(3));
console.log(+(2.75678).toFixed(2)); // converted to a number
