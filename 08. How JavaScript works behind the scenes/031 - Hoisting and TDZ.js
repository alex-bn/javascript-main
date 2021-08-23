'use strict';

// hoisting with variables

console.log(me); // returns undefined
// console.log(year); // return Cannot access 'year' before initialization dow to the Temporal Dead Zone (TDZ) that start at the begning of the script until the line where is defined
// console.log(job); //same applies for const & let variables

var me = 'Jonas';
let job = 'teacher';
const year = '1991';

// hoisting with functions
console.log(addArrowVar);
//console.log(addArrowVar(2, 3)); // addArrowVar is not a function -> because hoisting a var variable returns undefined and undefiend is not a function
//undefined(2, 3); // same result as above -> undefined is not a function 

console.log(addDecl(2, 3));
//console.log(addArrow(2, 3)); // currently in the TDZ and cannot be accessed 
//console.log(addExpr(2, 3));  // currently in the TDZ and cannot be accessed


function addDecl(a, b) { // the only that can be used before declaring it is the function declaration!
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

var addArrowVar = (a, b) => a + b;

// pitfall of hoisting 


// because of hoisting calling the var numProducts before it's actually declared will return undefined
console.log(numProducts); // return undefined and because undefined is a falsy value it will evaluate true and delete the products alhough we still have products in the cart..

if (!numProducts) deleteShoppingCart(); //step 3, basically it says that if numProducts is a falsy value, like 0, if there are no products in the cart, then delete the products

var numProducts = 10; // step 2

function deleteShoppingCart() {
    console.log('All products deleted'); //step 1
}

// best practices:
// use const most of the time and et only if you need/know that the value is gonna change during execution 
// declare the variables at the top of each scope as as a measure of writing  clean code 
// always declare the functions first even though function declarations are hoisted


// const vs let 

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // var creates a property on the global window object
console.log(y === window.y); // will not create property on the window obj
console.log(z === window.z); // will not create property on the window obj



