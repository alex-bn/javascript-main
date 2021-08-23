// BASIC OPERATORS -> an OPERATOR allows us to combine multiple values

// Mathematical/ Arithmetic Operators

const now = 2037;
const ageAlex = now - 1984;
const ageSarah = now - 2018;
console.log(ageAlex, ageSarah);

console.log(ageAlex * 2, ageAlex / 10, 2 ** 1024);

//2 ** 3 means 2 to the power of 3
// 2 ** 1024 means to to the power of 1024


// Concatenation/ joining strings with + operator

const firstName = 'Alex';
const lastName = 'Bajan';
console.log(firstName + ' ' + lastName);

// typeof operator -> gives the type of the value
console.log(typeof firstName);
console.log(typeof now);


// assignment operators

let x = 10 + 5;     // 15
x += 10;            // x = x + 10 = 25
x *= 4;             // x = x * 4 = 1000
x++;                // x = x + 1 = 101
x--;                // x = x - 1 = 100
x--;                // x = x - 1 = 99

console.log(x);

// comparison Operators -> used to produce boolean values

console.log(ageAlex > ageSarah);    // true 
console.log(now - 1984 > now - 2018);

console.log(ageAlex < ageSarah);
console.log(ageAlex >= ageSarah);
console.log(ageAlex <= ageSarah);
console.log(ageAlex >= 18);

const isFullAge = ageAlex >= 18;

