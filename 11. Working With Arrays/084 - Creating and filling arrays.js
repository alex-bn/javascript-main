'use strict';
// different ways of creating an array 

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// array constructor
const x = new Array(7); // will create an array with 7 empty places 
console.log(x);
console.log(x.map(() => 5)); // will give the same empty array

// filling the array

x.fill(1);

x.fill(1, 3, 5); // we can specify the value, starting index and the final index(which btw is not gonna be included in the array)
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// _ denotes a throwaway variable because the variable that is actually important for our exercise is the index so to reach the index we need to declare also the current variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// use the Bankist app for this example:

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);

  const movementUI2 = [...document.querySelectorAll('.movements_value')];

});