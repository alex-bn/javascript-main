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
