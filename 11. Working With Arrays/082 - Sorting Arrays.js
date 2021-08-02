'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements);
// JavaScript built in sort() method 

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);
// sort() method actually mutates the array

// Numbers

// if we imagine the sort() looping through the array
// a is the current value 
// b is the next value 
// or simply 2 consecutive numbers in the array

// return > 0 -> b before a (switch order)
// return < 0 -> a before b (keep order)

//// ascending ////
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//// descending ////
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// })

movements.sort((a, b) => b - a);
console.log(movements);
