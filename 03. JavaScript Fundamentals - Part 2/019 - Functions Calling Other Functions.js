'use strict'



function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${orangePieces} orange pieces and ${applePieces} apple pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//Reviewing functions


const today = new Date();
const currentYear = today.getFullYear();

const calcAge = function (birthYear) {
    return currentYear - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1984, 'Alex'));
console.log(yearsUntilRetirement(1999, 'Mike'));
console.log(yearsUntilRetirement(1934, 'Jonas'));

CSSMediaRule
//Reviewing the function types:

function calcAge(birthYear) {
    return currentYear - birthYear; // function declaration 
}

const calcAge = function (birthYear) {
    return currentYear - birthYear; // function expression
}

const calcAge = birthYear => currentYear - birthYear; // Arrow function


// Anatomy of a function 

function calcAge(birthYear, firstName) {
    const age = currentYear - birthYear;
    console.log(`${firstName} is ${age} years old.`);
    return age;
}

const age = calcAge(1991, 'Jonas');

































