'use strict';

// // convention: in OOP constructor functions start with a capital letter, same as Arrays or Maps

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this !!
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // Steps behind the scene:
// // 1. New {}(empty object) is created
// // 2. function is called, and the this keyword is set to: this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 1989);
// const jon = new Person('Jon', 1984);
// console.log(matilda, jon);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes //

// // each and every function in js automatically has a property called prototype, and that includes constructor functions

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jon.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas);
// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// //////////////
// // Prototypal inheritance on build-in objects

// console.log(jonas.__proto__);
// // top of the prototype chain: Object.prototype
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // returns null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 3, 6, 6, 1, 0, 9, 0, 4, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// //extending the prototype of a built-in object (generally not a good idea)
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr);
// console.log(arr.unique());

// //
// const h1 = document.querySelector('h1');
// console.log(h1);
// ///
// console.dir(x => x + 1);

//////////
//////////
//////////

// Classes in js are just synthetic sugar

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // Methods will be added to .prototype property of the PersonCl class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hi, my name is ${this.firstName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    // console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(`Jessica's age from a getter: ${jessica.age}`);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi, my name is ${this.firstName}!`);
// };

jessica.greet();

const walter = new PersonCl('Walter White', 1990);

// 1. Classes are NOT hoisted
// 2. Classes ARE first-class citizen
// 3. The body of a class is executed in strict mode
// ES6 Class:
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerateCl() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  breakCl() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
}

const carCl = new CarCl('Olcit', 60);
carCl.accelerateCl();
carCl.accelerateCl();
carCl.accelerateCl();
carCl.breakCl();
carCl.breakCl();
////

const account = {
  owner: 'Jonas',
  movements: [200, 900, 700, 543, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
//////////////////////////////////

// Static Methods
console.log(Array.from(document.querySelectorAll('h1'))); // is in the Array namespace
// this method will not work on actual arrays, this method will only be available for the Array constructor
const test = [1, 2, 3, 4, 5];
// test.from(); // is not a function
// STATIC METHODS ARE NOT AVAILABLE ON THE INSTANCES
Number.parseFloat(12); // static method -> developers use them as a kind of helper related to a certain constructor
/////

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// adding a static method:

Person.hey = function () {
  console.log('Hey there');
  // console.log(this);
};

// const jon = new Person('Jon', 1990);

Person.hey();
PersonCl.hey();
