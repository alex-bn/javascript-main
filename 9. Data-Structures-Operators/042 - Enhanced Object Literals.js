'use strict';
// Enhanced Object Literals

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


// can be referenced inside our object
const hours = {
    [weekdays[4]]: {
        open: 12,
        close: 22,
    },
    [weekdays[5]]: {
        open: 11,
        close: 23,
    },
    [`day-${2 + 4}`]: {
        open: 0,
        close: 12 + 12,
    },
};


// Object Literal Syntax:

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // Before ES6:
    // hours: hours,

    // Enhanced Object Literals:
    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20 : 00',
        address,
    }) {
        console.log(
            `Order received! 1 ${this.starterMenu[starterIndex]} and 1 ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
        );
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
        );
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

