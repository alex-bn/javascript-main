'use strict';

// Reduce method - > boils down all the elements in an array to one single value 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is like a snowball
const balance = movements.reduce(function (accumulator, current, index, arr) {

  console.log(`Iteration ${index}: ${accumulator}`); // simple test

  return accumulator + current;

}, 1);
// 1 is the initial value of the accumulator
console.log(balance);



// simplify the function:
const balance1 = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance1);


// for of loop

let balance2 = 0; // always need to declare an empty var or arr
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Practical exercise in our bankist app is to calculate the ballance of the transactions/movements and print the value on the page -> Step3


console.log(movements);


// Maximum value of the movements array 

const maximum = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);


console.log(maximum);