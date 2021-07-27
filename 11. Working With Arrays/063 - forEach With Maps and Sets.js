'use strict';
// Map:
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) { // 1st: current value, 2nd: key, 3rd: entire map that is being looped over
    console.log(`${key}: ${value}`);
})


// Set:

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {

    // same convention for Sets: 1st: current value, 2nd: key, 3rd: entire map that is being looped over


    console.log(`${value}: ${value}`); // a set doesn't have keys and it doesn't have indexes either
})

// in JS developers use _ to mark a throwaway variable, a variable that is completely unnecessary 