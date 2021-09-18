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
// ivfe - > immediately invoked function expression <--> only called once

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2); // will also print the shippingCost because of closures! a function natively has access to all the variables that were present at the functions birthplace!

console.log(ShoppingCart2);

// console.log(ShoppingCart.shippingCost); // not defined because the variable is private
