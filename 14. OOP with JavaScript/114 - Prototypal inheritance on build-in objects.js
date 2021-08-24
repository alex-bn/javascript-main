'use strict';

// convention: in OOP constructor functions start with a capital letter, same as Arrays or Maps

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this !!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Steps behind the scene:
// 1. New {}(empty object) is created
// 2. function is called, and the this keyword is set to: this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 1989);
const jon = new Person('Jon', 1984);
console.log(matilda, jon);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes //

// each and every function in js automatically has a property called prototype, and that includes constructor functions

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jon.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas);
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//////////////
// Prototypal inheritance on build-in objects

console.log(jonas.__proto__);
// top of the prototype chain: Object.prototype
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // returns null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 3, 6, 6, 1, 0, 9, 0, 4, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//extending the prototype of a built-in object (generally not a good idea)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr);
console.log(arr.unique());

//
const h1 = document.querySelector('h1');
console.log(h1);
///
console.dir(x => x + 1);
