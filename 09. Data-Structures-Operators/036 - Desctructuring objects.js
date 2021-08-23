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
};

restaurant.orderDelivery({
  time: '22 : 30',
  address: 'Via de l Sol 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via de l Sol 21',
});

// Object destructuring technique:

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring an object while changing the name of the variables(useful when getting data from a third party, such as an API):
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values:
const { menu = [], starterMenu: starters = [] } = restaurant; // specially helpful when the data is not hardcoded and in handy
console.log(menu, starters);

// Mutating variables while destructuring objects:

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 17 };

({ a, b } = obj);
console.log(a, b);

// Destructuring nested objects:
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
