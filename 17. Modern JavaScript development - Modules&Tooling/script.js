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

// console.log(ShoppingCart2);

//----------------------------------------------------------------
//----------------------------------------------------------------

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; // more useful
// import cloneDeep from 'lodash'; //

const state = {
  cart: [
    { product: 'apple', quantity: 6 },
    { product: 'juice', quantity: 3 },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepCLone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepCLone); // to create a deep copy or deep clone we can use lodash:

if (module.hot) {
  module.hot.accept();
} // only parcel understands this code: used to maintain the state of the page !
// will add new object into the cart array!

// npx parcel .\index.html
// or
// npm scripts : npm run start

// package.json:
// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html"
// }

// to build i had to remove:
// "main": "script.js",
// from package.json

// --------------------------------

// babel:
class Person {
  #greeting = 'Hei';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('Test').then(res => console.log(res));

//

import 'core-js/stable';
/*

Those who have installed parcel": "^2.0.0-rc.0 may encounter an issue where the js code isn't compiled to es5. This is because, in the newer version of the parcel, the default preset for babel is @babel/preset-typescript

To change the default preset,

1. We need to install the es5 babel preset

npm install --save-dev @babel/preset-env npm

2. We need to configure the .babelrc file

{     "presets": [         "@babel/preset-env"     ] }

*/
