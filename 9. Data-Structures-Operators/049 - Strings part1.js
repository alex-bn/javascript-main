'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // log the position
console.log(plane[1]); // 
console.log(plane[2]); //

console.log('B737'[0]); // log the position directly on the string

console.log(airline.length); // log the number of characters (length of the string)
console.log('B737'.length); // directly on the string

// METHODS:

// indexOf()-lastIndexOf() - gets the first/last appearance
console.log(airline.indexOf('r')); // get the position of a certain character (first appearance)
console.log(airline.lastIndexOf('r')); // last appearance of a character 
console.log(airline.indexOf('Portugal')); // look for entire words

// slice() method -> returns a substring by extracting parts of the string 
console.log(airline.slice(4)); // starts the extraction at position 4 -> returns a substring
console.log(airline.slice(4, 7)); // starts the extraction at position 4 and  stops at 7

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // starts extracting from the end of the string
console.log(airline.slice(1, -1)); // cuts off the last character


const checkMiddleSeat = function (seat) {
    // B and E are the middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('you got the middle seat');
    else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Alex')); // object
console.log(typeof new String('Alex').slice(1)); // string
// all string methods will return a string

