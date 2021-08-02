'use strict';

// The Remainder Operator - > returns the remainder of a division

console.log(5 % 2); // 1
console.log(5 / 2);

console.log(8 % 3); // 2
console.log(8 / 3);

// check if it's even or odd test

console.log(6 % 2); // remainder is 0 - > even
console.log(7 % 2); // remainder is 1 - > odd

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// Convert to binary -- a use case for the remainder operator:

/*
Example:

Convert 11 from decimal base to binary base, how to: 

11 / 2  = 5, Remainder: 1
5 / 2   = 2, Remainder: 1
2 / 2   = 1, Remainder: 0
1 / 2   = 0, Remainder: 1
Stop!
11 in binary base = 1011 - > take the remainders from the last to the first
*/

function convertToBinary(x) {
  let bin = 0;
  let rem;
  let i = 1;
  let step = 1;

  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${step++}: ${x} / 2 = ${parseInt(x / 2)}, Remainder: ${rem}`
    );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
    // this means that with every iteration the following is happening in our 11:
    // bin = 0 + 1 * 1
    // bin = 1 + 1 * 10
    // bin = 11 + 0 * 100
    // bin = 11 + 1 * 1000
    // bin = 1011
    // Stop!
  }
  console.log(`Binary: ${bin}`);
}

convertToBinary(11);
