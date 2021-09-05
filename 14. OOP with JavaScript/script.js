'use strict';

// // // convention: in OOP constructor functions start with a capital letter, same as Arrays or Maps

// // const Person = function (firstName, birthYear) {
// //   // Instance properties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // Never do this !!
// //   // this.calcAge = function () {
// //   //   console.log(2037 - this.birthYear);
// //   // };
// // };

// // const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// // // Steps behind the scene:
// // // 1. New {}(empty object) is created
// // // 2. function is called, and the this keyword is set to: this = {}
// // // 3. {} linked to prototype
// // // 4. function automatically returns {}

// // const matilda = new Person('Matilda', 1989);
// // const jon = new Person('Jon', 1984);
// // console.log(matilda, jon);

// // const jay = 'Jay';

// // console.log(jonas instanceof Person);
// // console.log(jay instanceof Person);

// // // Prototypes //

// // // each and every function in js automatically has a property called prototype, and that includes constructor functions

// // console.log(Person.prototype);

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // jonas.calcAge();
// // matilda.calcAge();
// // jon.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype); // true

// // console.log(Person.prototype.isPrototypeOf(jonas)); // true
// // console.log(Person.prototype.isPrototypeOf(Person)); // false

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas);
// // console.log(jonas.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// // //////////////
// // // Prototypal inheritance on build-in objects

// // console.log(jonas.__proto__);
// // // top of the prototype chain: Object.prototype
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__); // returns null

// // console.log(Person.prototype.constructor);
// // console.dir(Person.prototype.constructor);

// // const arr = [3, 3, 6, 6, 1, 0, 9, 0, 4, 3]; // new Array === []
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// // //extending the prototype of a built-in object (generally not a good idea)
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr);
// // console.log(arr.unique());

// // //
// // const h1 = document.querySelector('h1');
// // console.log(h1);
// // ///
// // console.dir(x => x + 1);

// //////////
// //////////
// //////////

// // Classes in js are just synthetic sugar

// // class expression
// // const PersonCl = class {};

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // instance methods
//   // Methods will be added to .prototype property of the PersonCl class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hi, my name is ${this.firstName}!`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there');
//     // console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(`Jessica's age from a getter: ${jessica.age}`);

// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hi, my name is ${this.firstName}!`);
// // };

// jessica.greet();

// const walter = new PersonCl('Walter White', 1990);

// // 1. Classes are NOT hoisted
// // 2. Classes ARE first-class citizen
// // 3. The body of a class is executed in strict mode
// // ES6 Class:
// // class CarCl {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// //   accelerateCl() {
// //     this.speed = this.speed + 10;
// //     console.log(this.speed);
// //   }
// //   breakCl() {
// //     this.speed = this.speed - 5;
// //     console.log(this.speed);
// //   }
// // }

// // const carCl = new CarCl('Olcit', 60);
// // carCl.accelerateCl();
// // carCl.accelerateCl();
// // carCl.accelerateCl();
// // carCl.breakCl();
// // carCl.breakCl();
// ////

// const account = {
//   owner: 'Jonas',
//   movements: [200, 900, 700, 543, 100],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
// //////////////////////////////////

// // Static Methods
// console.log(Array.from(document.querySelectorAll('h1'))); // is in the Array namespace
// // this method will not work on actual arrays, this method will only be available for the Array constructor
// const test = [1, 2, 3, 4, 5];
// // test.from(); // is not a function
// // STATIC METHODS ARE NOT AVAILABLE ON THE INSTANCES
// Number.parseFloat(12); // static method -> developers use them as a kind of helper related to a certain constructor
// /////

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // adding a static method:

// Person.hey = function () {
//   console.log('Hey there');
//   // console.log(this);
// };

// // const jon = new Person('Jon', 1990);

// Person.hey();
// PersonCl.hey();

// // object.create - manually set the prototype of an object to any other object

// const PersonPrototype = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonPrototype);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// console.log(steven.__proto__ === PersonPrototype);

// const sarah = Object.create(PersonPrototype);
// sarah.init('Sarah', 2000);
// sarah.calcAge();
// ////////////////////////////////////////////////////////////////
// /*
// Challenge: 1
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120km/h
// DATA CAR 2: 'Mercedes' going at 95km/h

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// */

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUD(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);

// ford.speedUD = 50;
// console.log(ford); // 50 * 1.6
// ////////////////

// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking prototypes:
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);
////
// Coding challenge
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (speed, make, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = this.charge - this.charge * 0.01;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

const tesla = new EV(120, 'Tesla', 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
////////////////////////////////

// Inheritance Between "Classes": ES6 Classes

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
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

  // Static methods
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // will appear first in the prototype chain, is shadowing the one from the parent class
  calcAge() {
    console.log(`I am ${2037 - this.birthYear}. Call made from the subclass.`);
  }
}

const martha = new StudentCl('Martha Jones', 2010, 'History');
martha.introduce();
martha.calcAge();
///////////////////
//////////////////
// Inheritance Between "Classes": Object.create

// Parent class
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// Created from the parent class
const steven = Object.create(PersonProto);

// Child class
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'History');
jay.introduce();
jay.calcAge();

///////////////
// Another Class example:

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface of our object (API)
  deposit(val) {
    this.movements.push(val);
  }
  // abstracts the fact that this is a negative movement
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// not recommended
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
acc1.approveLoan(2000); // example of another method that should not be accessible from the outside

console.log(acc1.pin); // it should'nt be accessible from outside the class, to be continued..

// DATA ENCAPSULATION
// DATA PRIVACY
