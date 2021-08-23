'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20 : 00',
    address,
  }) {
    console.log(
      `Order received! 1 ${this.starterMenu[starterIndex]} and 1 ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//////////////////////////
/// SHORT CIRCUITING ///

// LOGICAL OPERATORS:

// can use ANY data type
// can return any data type
// can be used for 'short-circuiting' -> short-circuit evaluation

// in the case of || operator short-circuit evaluation means that if the first value is a truthy value -> javascript immediately returns that first value and it's not going to evaluate the rest of the operands

// OR || operator
console.log(3 || 'Jonas'); // 3

console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null -> returns the last evaluated operand

console.log(undefined || 0 || '' || 'hello' || 23 || null); // 'hello' is the first truthy value so it will short-circuit the entire evaluation and it will be the returned value

console.log('--- OR ---');
// practical application -> can be used to set default values
restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
console.log(restaurant.numGuests);
const guest2 = restaurant.numGuests || 10; // will return 10 because restaurant.numGuests it's undefined and moves to the next operand that is in tis case the default value
console.log(guest2);
console.log(restaurant.numGuests);
console.log(restaurant);

console.log('--- OR ---'); // can be used to execute code if the first operand is true

// in the case of || operator short-circuit evaluation means that if the first value is a falsy value -> javascript immediately returns that first value and it's not going to evaluate the rest of the operands

console.log(0 && 'Jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('basil', 'garlic');
}

console.log(restaurant.orderPizza && restaurant.orderPizza('basil', 'garlic'));
