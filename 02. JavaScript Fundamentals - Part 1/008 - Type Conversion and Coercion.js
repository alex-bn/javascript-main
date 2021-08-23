// Type conversion: manually convert from one type to another, or explicitly convert from one type to another
// Type coercion: js automatically converts types behind the scene, it happens implicitly completely hidden from us

//Conversion: 
// strings to numbers
const inputYear = '1991';

console.log(inputYear + 18); // concatenates 1991 to 18
console.log(Number(inputYear), inputYear);
// the original is not converted
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));// this gives NaN -> Not a Number
console.log(typeof (NaN)); // of type number tells us that is an invalid Number

//numbers to strings
console.log(String(1984), 1984);

//Coercion:
// the + operator triggers a coercion to strings
console.log('I am ' + 23 + ' years old.');
// so this statements will be the same as: 
console.log('I am ' + '23' + ' years old.');
//without automatic type coercion we would have to write:
console.log('I am ' + String(23) + ' years old.');

// the -*/>< operators trigger type coercion strings to numbers
console.log('23' - '10' - 3);

console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '12');

let n = '1' + 1; // is converted to 11
n = n - 1; // 11 - 1
console.log(n); //prints 10