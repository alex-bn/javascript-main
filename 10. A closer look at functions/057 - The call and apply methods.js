'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
    },
};


lufthansa.book(235, 'Jonas');
lufthansa.book(234, 'Mary');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};


const book = lufthansa.book;

// Does NOT WORK
// book(23, 'Sarah') // in a regular function call the this keyword point to undefined, at least in strict mode
// this book function is it not the function book of the lufthansa object, is a copy of lufthansa.book but is not a method anymore

// Call method
book.call(eurowings, 23, 'Sarah'); // call() allows you to set the this keyword to any function that you want to call
console.log(eurowings);

book.call(lufthansa, 236, 'Alex');
console.log(lufthansa);

const swiss = {
    airline: 'SwissAirlines',
    iataCode: 'SA',
    bookings: []
}

book.call(swiss, 678, 'Jon')


// Apply method
const flightData = [584, 'George'];
book.apply(swiss, flightData)

console.log(swiss);

book.call(swiss, ...flightData) // Modern javascript uses the spread operator instead of apply


