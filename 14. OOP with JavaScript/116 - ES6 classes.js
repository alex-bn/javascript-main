//////////
//////////
//////////

// Classes in js are just synthetic sugar

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property of the PersonCl class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hi, my name is ${this.firstName}!`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi, my name is ${this.firstName}!`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes ARE first-class citizen
// 3. The body of a class is executed in strict mode
