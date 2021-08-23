'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

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




if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.close);

// Optional chaining 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

console.log(restaurant.openingHours.fri?.open);

// Example
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// remember that nullish values are NULL and UNDEFINED
// bot the nullish coalescence operator and optional chaining were introduced in ES2020

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day} we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.order.orderRisotto?.(0, 1) ?? 'Method does not exists');

//Arrays 

const users = [
    { name: 'jonas', email: 'jonas@mail.com' },
    { name: 'ela', email: 'ela@mail.com' },
]

console.log(users[0]?.name);
console.log(users[3]?.name ?? 'no such user');