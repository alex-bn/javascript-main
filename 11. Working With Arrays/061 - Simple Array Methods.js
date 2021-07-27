'use strict';

// TOOLS to be used for arrays

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice() method -> will not create a new array

console.log(arr.slice(2)); // returns a new array only with the extracted parts, from indx 2 onward

console.log(arr.slice(2, 4)); // you can also mention the end parameter but remember that is not included in the output


console.log(arr.slice(-2)); // last two elements
console.log(arr.slice(-1)); // last element of the array


console.log(arr.slice(1, -2)); // from index 1 and without the last 2 elements

console.log(arr.slice()); // creates a shallow copy
console.log([...arr]); // another way to create a shallow copy


// splice() method -> it mutates the array !!! takes parts from the array and the original array looses those extracted parts


// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2) // after the first element deletes the next 2
console.log(arr);

// reverse() - > mutates the array

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

const arr3 = ['j', 'i', 'h', 'g', 'f'];

arr3.reverse();
console.log(arr3);

//concat() - > 

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]); // same as concat()

// join()
console.log(letters.join(' - '));




