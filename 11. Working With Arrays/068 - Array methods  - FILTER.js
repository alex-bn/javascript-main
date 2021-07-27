'use strict';

// Filter method -> use to loop through elements that satisfy a certain condition 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const deposits = movements.filter(function (current, index, arr) {
  return current > 0;
})

console.log(movements);
console.log(deposits);

// same result using a for of loop
const depositsFor = []
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov)
  };
}
console.log(depositsFor);


// filter while using an arrow function

const withdrawals = movements.filter(current => current < 0);
console.log(withdrawals);