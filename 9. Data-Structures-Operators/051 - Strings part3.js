'use strict';

// split() - > one of the most powerful string methods
// join()
console.log('a+very+nice+string'.split('+'));
console.log('jonas schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

// capitalize names

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}

const capitalizeName2 = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}
// different approaches that give the same result
capitalizeName2('jessica ann smith davis');
capitalizeName2('jonas schmedtmann');

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('jonas'.padStart(25, '-').padEnd(40, '+'));


const maskCreditCard = function (number) {
    const str = number + ''; // result will be a string
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard('1234567890'));

// Repeat 


const message2 = 'bad weather all departures delayed';

console.log(message2.repeat(2));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${':/'.repeat(n)}`);
}

planesInLine(5)
planesInLine(12)
