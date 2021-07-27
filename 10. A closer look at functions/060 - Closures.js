'use strict';

// a closure happens automatically in a certain situation

const secureBooking = function () { // this function will not allow the manipulation of the passenger number from the outside scope 
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();

booker();
booker();
booker();



const booker2 = secureBooking();

booker2();
booker2();
booker2();



console.dir(booker);

// CLOSURES SUMMARY

//1
/*

A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preservers the scope chain throughout time.

a closure makes sure that a function doesn't loose connection to variables that existed at the function;s birth's place

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

*/

// what does this code log out ?

// var < - > let 

// var -> when you use var in a for loop that variable actually gets hoisted up into the parent scope, which in this case would be the global scope, with var we have a global variable that we're mutating over and over again

// let ->  with let we're creating a variable that is scoped to the for loop, in other words is local to the for loop and can't be accessed outside of it

// a closure is a combination of a function and its lexical environment 

for (let i = 0; i < 3; i++) {
    const log = () => {
        // debugger;
        console.log(i);
    }
    setTimeout(log, 100);
}

for (var i = 0; i < 3; i++) {
    const log = () => {
        // debugger;
        console.log(i);
    }
    setTimeout(log, 100);
}


// VAR gets HOISTED UP INTO the parent scope which in this case would be the GLOBAL SCOPE
// javascript closures are functions that can access values outside of their curly braces 

// Another example:
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}



g();
f();
console.dir(f)

// Re-assigning f function
h();
f();

console.dir(f)

// And another example:

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 group, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000;
boardPassengers(180, 3);