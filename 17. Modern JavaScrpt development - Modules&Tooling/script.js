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
