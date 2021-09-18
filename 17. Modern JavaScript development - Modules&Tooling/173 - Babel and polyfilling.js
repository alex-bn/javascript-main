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
