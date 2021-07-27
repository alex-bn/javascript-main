'use strict';
// Chaining METHODS

const eurTUsd = 1.1;

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const totalDepositsInUSDollars = movements

  // PIPELINE DEBUGGING happens in the the next array method if something goes wrong in the previous method

  .filter(mov => mov < 0) // problem appears to be in this method
  .map((mov, i, arr) => {// debugging starts here
    console.log(arr);
    return mov * eurTUsd
  })
  // .map(mov => mov * eurTUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSDollars);

// we can only chain a method after another one if the first one returns an array