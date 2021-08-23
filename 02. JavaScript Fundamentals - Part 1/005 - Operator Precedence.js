//Operator PRECEDENCE - > js has a well defined operator precedence 

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

const now = 2037;
const ageAlex = now - 1984;
const ageSarah = now - 2018;

console.log(now - 1984 > now - 2018);
console.log(ageAlex > ageSarah);

console.log(25 - 10 - 5); //right to left

let x, y;

x = y = 25 - 10 - 5;    // x = y = 10 <- right to left - > y = 10 and y = x so x = 10
// x = y = 10 -> imagine this left to right -> x is always equal to y and y is equal to 10 so x != 10 <- which IS wrong!

console.log(x, y);


const averageAge = (ageAlex + ageSarah) / 2;
console.log(ageAlex, ageSarah, averageAge);