const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// template literal, one of the most used ES6 features:
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// we can use backticks for any regular strings (many developers use them for all strings)
console.log(`Just a regular strings`);

//another use case of template literal is to create multi line strings
//old way of doing it:
console.log('String with \n\
multiple \n\
lines'); // \n -> means a new line

// with template literal:
console.log(`String
multiple
lines`); // use backticks and simply press return for a new line and that's it!