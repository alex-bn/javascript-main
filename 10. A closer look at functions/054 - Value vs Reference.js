'use strict';

// JavaScript is a programming language where 


const flight = 'FL334';
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 2134234235
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'UI098';
    passenger.name = 'Mr. ' + passenger.name
    if (passenger.passport === 2134234235) {
        alert('Checked in')
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// IS the same as doing  
// const flightNum = flight;
// const passenger = jonas;
// WHEN we copy an object like  this we really only copying the reference to that object in the memory heap, they BOTH POINT to the same object in memory

// In summary passing a primitive type to a function is really just like creating a copy that point to the same object in memory 

// When we copy an object like jonas and make a change, whatever changes in the copy will change in the original also 


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// two functions manipulating the same object

// In programming there are two terms used to describe dealing with functions: 

//passing by value

//passing by reference

// JAVASCRIPT dows not have passing by reference, JS has only passing by value!


let a = 10;
let b = 'Hi';
let c = a;
c = c + 1;

let d = [1, 2];
let e = d;
d.push(3);

let f = [3, 4, 5]

let g = [1, 2];


console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);// it's gonna modify both c and d because they point to the exact same value
console.log(`d = ${d}`);// it's gonna modify both c and d because they point to the exact same value
console.log(`e = ${e}`);
console.log(`f = ${f}`);

console.log(`e === d ${e === d}`);
console.log(`e == d ${e == d}`);

console.log(`d == g ${d == g}`); // they point to different memory address even thou is the same exactly array
console.log(`d == g ${d == g}`); // they point to different memory address even thou is the same exactly array


let i = [1, 2] // 0x01
console.log(`i = ${i}`);
add(i, 3);
console.log(`i = ${i}`);

function add(array, element) { // 0x01, 3
    array.push(element)
};

