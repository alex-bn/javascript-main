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
};

const arr = [7, 8, 9];

// old way of expanding an array
const oldWay = [1, 2, arr[1], arr[1], arr[2]];
console.log(oldWay);

// new and improved way of an array by using this wonderful operator called 'spread' operator
const newArr = [1, 2, ...arr];
console.log(newArr);

// logging the individual elements of this new array
console.log(...newArr); // -> returns 1 2 7 8 9

// this is a completely new array from scratch, based from restaurant.mainMenu and adding a new item

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const nnMenu = ['Italian San', ...restaurant.mainMenu];
console.log(nnMenu);

// Spread Operator (...) - > takes all elements from the array and doesn't create new variables -> best used in places where you'd write values separated by commas

// (...) Use Cases: 1) Create shallow copies of arrays & 2) Merge 2 arrays together

// 1) Create shallow copies of existing arrays

const copy1 = [...arr];
console.log(copy1);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 2) Join 2 or more arrays together

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
console.log(...menu);

// (...) the Spread operator works on all iterables -> Arrays, Strings, Maps and Sets BUT NOT objects

// (...) on strings

const str = 'jonas'; // can be used to unpack strings

const letters = [...str, ' ', 'S.'];
console.log(letters);

// keep in mind that we can only use the spread operator when building an array or when we pass values into a function

console.log(...str); // getting individual elements

// can't be used to build a template literal
// console.log(`${...str} Smith`); // error -> Unexpected token '...'

////////////////////////////////////////////////////////////////

// small note: you can escape characters using \ before the single quote ', like so: 'Let\'s make pasta', just don't forget

// REAL WORLD EXAMPLE
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients); // will not work, but why ?

// oldway of calling
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// using the spread operator to
restaurant.orderPasta(...ingredients);

// even though objects are NOT iterables, the spread operator works on objects also
const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// making copies of objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Test Name';
console.log(restaurant.name);
console.log(restaurantCopy.name);
