'use strict';


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


// book.call(eurowings, 23, 'Sarah'); // call() method

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(899, 'Helen');

// Partial application 
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Padre')
bookEW23('Solomon')
console.log(eurowings);

// With Event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

// in an event handler the this keyword always point to the element to which is attached
// this keyword is set dynamically 
// in our case the this keyword return the entire button when used like in the following example:

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// lufthansa.buyPlane(); 

// Another application for the bind() method (partial application)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * .23;


// Different approach: 
console.log(addVAT(100));


const tax = function (value) {
    return function (rate) {
        console.log(value + value * rate);
    }
}

tax(100)(0.23)

// Jonas solution: 

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}


console.log
    (addTaxRate(0.25)(100))