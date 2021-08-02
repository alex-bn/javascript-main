'use strict';

// since 2020 js has the special type of integers called bigint

// in js numbers are represented internally as 64 bits
// that means that there are exactly 64 1s and 0s to represent any given number
// of these 64 bits only 53 are actually used to store the digits, the rest are for storing the position of the decimal and the sign

// this bring the following limitation, biggest number that js can represent:

console.log(2 ** 53 - 1);
// js keeps this number under the variable:
console.log(Number.MAX_SAFE_INTEGER);

// this means that any integer larger than this number cannot be safely represented!

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 10);
console.log(2 ** 53 + 100);
console.log(2 ** 53 + 4);

// in the case we need to work with really big numbers since 2020 a new primitive has been added to js called bigint

console.log(9281678931264872364827364873216482376487326n);
console.log(typeof 9281678931264872364827364873216482376487326n);

console.log(BigInt(543656856786));

// Operations -> all usual operators work the same

console.log(10000n + 10000n);
console.log(100008979872987982n * 858758758875n);

const hugeNumber = 298687263872693872698n;
const smallNum = 23;

console.log(hugeNumber * BigInt(smallNum));
// Cannot mix BigInt and other types, use explicit conversions

// Also the Math operation will not work:
// console.log(Math.sqrt(9n));

console.log(20n > 15); // still works
console.log(20n === 20); // false -> different types
console.log(20n == 20); // still should be true
console.log(20n == '20'); // still should be true

// Divisions
console.log(10n / 3n); // returns the closest BigInt
console.log(11n / 3n);
