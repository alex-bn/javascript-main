'use strict';
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]


console.log(movements);

// checks for EQUALITY
console.log(movements.includes(-650));

// checks for a CONDITION
console.log(movements.some(mov => mov === -130));


const anyDeposits = movements.some(mov => mov > 1500); // if there is any value that satisfy the condition then it will return true
console.log(anyDeposits);



// EVERY - > returns true only if all elements from the array satisfy the condition that we are passing in 

console.log(movements.every(mov => mov > 0));
console.log(movements.every(mov => mov !== 0));

// Separate callbacks 

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));