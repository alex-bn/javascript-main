'use strict';

// MAPS are more useful than SETS
// in JS a map is data structure that can be used to map values to keys
// MAPS are similar to objects, the difference being that in MAPS the keys can have ANY type
// in objects the keys are always strings 
// in maps we can have any type of key, it can be even objects, or arrays, or other maps


// Constructing maps

const rest = new Map();

// Update / Fill up the map, set() method

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// calling the set() method also return he map 
console.log(rest.set(3, 'Hamburg, Germany'));

// chaining the set() method
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

// read data from a map using the get() method

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// using the boolean keys
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// has() method -> checking for a certain key
console.log(rest.has('categories')); // returns a boolean

// delete() elements from the map based on the key
rest.delete(3);
console.log(rest);

// size() method
console.log(rest.size);

// remove all elements
// rest.clear();
console.log(rest);

// Using objects as map keys
rest.set([1, 2], 'Test')
console.log(rest);

console.log(rest.get([1, 2])); // returns undefined because they are actually not the same object in the heap memory  

// will work the following method
const arr = [1, 2];
rest.set(arr, 'Test1');
console.log(rest.get(arr)); // will return the array because they refer to the same place in memory

// using the DOM elements
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);