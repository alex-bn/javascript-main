// Static Methods //
// STATIC METHODS ARE NOT AVAILABLE ON THE INSTANCES //

console.log(Array.from(document.querySelectorAll('h1'))); // is in the Array namespace
// this method will not work on actual arrays, this method will only be available for the Array constructor
const test = [1, 2, 3, 4, 5];
// test.from(); // is not a function

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

PersonCl.hey();
