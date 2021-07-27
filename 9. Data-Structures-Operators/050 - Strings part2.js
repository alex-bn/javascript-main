'use strict';

const airline = 'TAP Air Portugal';

// changing the case

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('test'.toUpperCase());

// Fix capitalization in name example
const passenger = 'jOnAS' // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

function fixCap(name) {
    let toLower = name.toLowerCase();
    let setCap = toLower[0].toUpperCase() + toLower.slice(1)
    return console.log(setCap);
}

fixCap('aLEx')


// Comparing Emails // Normalizing emails

const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmerEmail = lowerEmail.trim();
// console.log(trimmerEmail);

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail);

console.log(normalizedEmail === email);

function checkEmail(email1, email2) {
    let normalizedEmail = email1.toLowerCase().trim()

    return console.log(email2 === normalizedEmail);
}

checkEmail(' ALEx@maIL.IO \n\n', 'alex@mail.io')

//trimStart() - trimEnd()

const firstName = '  alex    ';
console.log(firstName.length);
console.log(firstName.trimStart().length)
console.log(firstName.trimEnd().length);


// replacing 
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23.Boarding door 23!'

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// BOOLEANS
const plane = 'Airbus A230neo';
console.log(plane.includes('A230'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('part of the new airbus family');
}

//// Practice exercise 
const checkBaggage = function (items) {
    const baggage = items.toLowerCase(); // good practice so that you can easily compare
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection');






