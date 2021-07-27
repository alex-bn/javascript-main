'use strict';

// sometimes is useful to have functions that have default parameters



const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // default values modern way
    // ES5 
    // numPassengers = numPassengers || 1;
    // price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 4) // takes the price from the multiplications
createBooking('BHA32', undefined, 1000) // undefined takes the default value