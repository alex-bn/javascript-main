/*
 
 Importing module
 all import statements are hoisted to the top
 all modules are executed in strict mode by Default

 */

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost); variable is not defined in the current scope unless is imported/exported

// //
// // import all the values at the same time:
// import * as ShoppingCart from './shoppingCart.js';
// // will create a namespace for all of the values from that module

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // -> not recommended

import add, { cart } from './shoppingCart.js'; // -> importing the default export
add('Wine', 6);
add('Bread', 5);
add('Apples', 2);

console.log(cart);

//----------------------------------------------------------------

/*

Exporting module

Variables that are declared inside of a module are actually scoped to this module, so basically inside a module the module itself is like the top level scope

So by default all top-level variables are private and scoped to the current module and can be used only here unless exported

Types of exports: named exports & default exports
*/

console.log('Exporting module');

//
const shippingCost = 10;
export const cart = [];

// Named exports (top-level code ONLY):

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};

/*

!!! Will work only when the exported code is TOP-LEVEL code! For example this will not work:

if(true) {
  export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};
}

*/

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//----------------------------------------------------------------
// Default exports:
// when we want to export one thing per module:

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
}
