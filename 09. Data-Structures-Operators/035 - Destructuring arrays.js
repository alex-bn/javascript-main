'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// array destructuring -> ES6 feature -> a way of unpacking values from an array or an object into separate variables
// to brake a complex data structure down into a small data structure like a variable

const arr = [1, 2, 3];
// without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

// using destructuring
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories; // first 2 elements
console.log(first, second);

let [main, , secondary] = restaurant.categories; // first and third element
console.log(main, secondary);

// the original array is not affected, it just unpacked
// switching between main and secondary variables without destructuring

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//using destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Setting default values // Useful when we don't know the exact number of elements fom an arraydestructuring arrays

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
