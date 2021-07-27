'use strict'
// Execution Content:
//      - variable environment
//      - scope chain
//      - the this keyword

// HOW THE THIS KEYWORD WORKS 

/*
The this keyword/variable is a special variable that is created for every execution context (every function). Takes the value of (points to) the owner of the function in which the this keyword is used.
*/


// outside of any function
console.log(this);

// inside of a regular function call
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // in strict mode returns undefined, and in sloppy mode returns the global object, window object
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // arrow function does not get a this keyword so it will use lexical this keyword which is the parent this keyword, in this case the global scope, window object  
};
calcAgeArrow(1992);

// in a method

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.year);
    },
};
jonas.calcAge();

// a subtle but very important difference 
// will not simply point to the object in which we wrote the method, but to the object that is calling the method

const matilda = {
    year: 2015,
};

matilda.calcAge = jonas.calcAge // we copied the calcAge method from jonas to matilda 
// this is called method borrowing from one obj to  another


matilda.calcAge(); // we can see that the this keyword always points to the object calling the method

// we can take this even further 
const f = jonas.calcAge; // we copied the function into a new variable 

f(); // undefined because this is a regular function call, so therefore the this keyword is undefined


















