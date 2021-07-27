'use strict';

// function that is executed once and then never again!

const runOnce = function () {
    console.log('This will never run again');
};

runOnce();




// Immediately invoked function expression (IIFE)
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate); the global dows not have access to something that inside of a scope
// all data defined inside a scope is private / is encapsulated


// data Encapsulation & data Privacy will be discussed in the OOP module.

(() => console.log('IIFE is also available for arrow functions'))();





{
    const isPrivate = 23;
    var notPrivate = 24; // var completely ignores the block
}

console.log(isPrivate);
console.log(notPrivate);