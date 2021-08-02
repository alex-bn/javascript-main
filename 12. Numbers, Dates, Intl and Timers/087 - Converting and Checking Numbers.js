'use strict';

/////////////
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // simply put this is how javascript works and this is a known problem

console.log(typeof '23');

console.log(typeof Number('23'));

console.log(typeof +'23'); // when js sees the + operator it will do type coercion and convert hte string to a number

// Parsing
console.log(Number.parseInt('30px', 10));

console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// check if value is literally NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// best way of checking if a value is a real number and not a string is by using .isFinite() method

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
console.log(Number.isInteger(23.8));

// These functions are Global functions and can be called without the namespace, but is considered a good practice to keep the namespace of a function when is called

console.log(isFinite(23));
console.log(Number.isFinite(23));
