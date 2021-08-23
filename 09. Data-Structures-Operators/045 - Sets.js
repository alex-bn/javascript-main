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


// Data structures: SETS -> a collection of unique values (CANNOT have any duplicates)

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);


console.log(ordersSet);
// all duplicates are actually gone
// just like arrays, sets are iterables 
// a set is different from an array: 1st the elements are unique and then the order is irrelevant 

// keep in mind that strings are also iterables 
console.log(new Set('Alex'));

// How to work with sets

// Get the size of a set (similar to length for arrays):
console.log(ordersSet.size);


// Check if an element is IN a set (similar to the includes method):
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Add new elements:
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Delete an element:
ordersSet.delete('Risotto')
console.log(ordersSet);

// Delete all elements of a sets
// ordersSet.clear();
console.log(ordersSet);

// Sets are iterable:
for (const order of ordersSet) console.log(order);


// In sets there are no indexes and there is no way to get data out of a set
// Use Case: remove duplicate values of arrays
// Get the unique values:
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// Get the number of unique values:
console.log(new Set(['waiter', 'chef', 'manager', 'waiter', 'chef', 'waiter']).size);

console.log(new Set('alexbajan').size);
console.log(new Set('alexbajan'));
