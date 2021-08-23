'use strict';

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    //   const self = this; // self of that
    //   const isMillennial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillennial();
    // },

    // Solution 2
    const isMillennial = () => {
      // uses the this keyword from its parent scope
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  greetExp: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); // an arrow function does not get its this keyword, it will simply use the this keyword from its surroundings, its parent's this keyword, the parent scope of the greet method is the global scope

// also const jonas is not a block with its own scope, it's not a code block is just an object literal

//when we try to access a property that does not exist on an object we do not get an error, we simply get undefined

// this behavior can become dangerous when we use var variables -> creates properties on the global properties and so the this keyword will point to that specific property when called

console.log(this.firstName); // will point to the this keyword of the gl

// it's no recommended to use an arrow function as a method, better to use a normal function expression to prevent this kind of mistakes from happening
jonas.greetExp();

////////////////////////////////////////////////////////////////
jonas.calcAge();

////////////////////////////////////////////////////////////////
// arguments keyword only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); // useful when we need a function to accept more parameters than we actually specified
addExpr(2, 5, 6, 9);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); //arguments is not defined not available for arrow functions

// WOP i need to go back to this..
