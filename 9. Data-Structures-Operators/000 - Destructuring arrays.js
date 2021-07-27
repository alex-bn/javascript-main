// destructuring the result of a function that returns an array
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}
// old way
const array = sumAndMultiply(2, 3);
console.log(array); // -> returns an array [5, 6]

// use destructuring
const [sum, multiply] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);

// setting default values
const [sum1, multiply1, division = 'no division'] = sumAndMultiply(2, 3);
console.log(sum1);
console.log(multiply1);
console.log(division);

// REAL POWER OF DESTRUCTURING COMES WITH OBJECTS

const personOne = {
  name: 'Alex',
  age: 25,
  address: {
    city: 'Somewhere',
    state: 'One of them',
  },
};

function printUser({ name, age, favoriteFood = 'apples' }) {
  console.log(`Name is: ${name}. Age is: ${age}. Fav food: ${favoriteFood}.`);
}
printUser(personOne);

/* Destructuring */
// It's a JavaScript syntax that makes it possible to extract data from arrays or objects into distinct variables

// Assign variables from objects
// Old way to do it:
var voxel = { x: 3.5, y: 5.3, z: 6.25 };
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;
console.log(x);
console.log(y);
console.log(z);
// Destructuring method:
var { x, y, z } = voxel;
console.log(x, y, z);
var { x: a, y: b, z: c } = voxel;
console.log(a, b, c);

// Assign variables from nested objects
const nested = {
  start: { x: 5, y: -6 },
  end: { x: 9, y: -8 },
};

const {
  start: { x: startX, y: startY },
} = nested;

console.log(startX);
console.log(startY);

// Assign variables from Arrays
const [q, , , , r] = [1, 2, 3, 4, 5];
console.log(q, r);

// Rest Operator to Reassign Array Elements
const [i, ...rest] = [1, 2, 3, 4, 5];
console.log(i);
console.log(rest);

// Pass an Object as a Function's Parameters
const profileUpdate = ({ name, age, nationality, location }) => {
  //do something with these variables
};

////////// SPREAD //// AND //// REST /// OPERATORS////////////////////////////////
/* Spread Operator / Rest Operator */

// add elements of an existing array into a new array
var arr1 = ['a', 'b'];
var arr2 = ['c', ...arr1, 'r', 'y', 't'];
console.log(arr2);

// pass elements of an array as arguments to a function
const add = function (...numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 7, 8, 9);
add(1, 2, 3, 4, 5, 10, 16, 88, 98);

const x = [9, 9, 9];
add(...x);

// copy arrays
let original = [1, 2, 3, 4];
let copy = [...original];

original.push(5);

console.log(original);
console.log(copy);

// concatenate arrays
let concat = [...original, ...copy];
console.log(concat);
// another way to concat:
let concat1 = original.concat(copy);
console.log(concat1);
