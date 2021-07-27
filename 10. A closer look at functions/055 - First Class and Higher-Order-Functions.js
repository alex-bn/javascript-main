
// First-class functions enables us to write higher order functions 

/*

First-Class-Functions is just a feature that a programming language either has or does not have, all the means is that all functions are values, that's it, there are no First-Class-Functions in practice, it's just a concept.
There are however Higher-Order-Functions in practice (like the addEventListener('click', function (){})) which are possible because the language supports First-Class-Functions.

*/

// Functions accepting callback functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function as it takes a function as a parameter
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);


// JS uses callback all the time

const sillyFunction = function () {
    console.log('This is a callback message');
}
const arr = ['jonas', 'jon', 'joe'];
arr.forEach(sillyFunction);