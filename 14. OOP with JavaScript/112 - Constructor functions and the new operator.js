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
