// Arrow function -> added to js in ES6
// shorter and therefore faster to write 


// Function expression
const ageCalc = function (birthYear) {
    return 2037 - birthYear;
}
// const age = ageCalc(1991);
// console.log(age);

// Arrow function

const ageCalc1 = birthYear => 2037 - birthYear;

const age1 = ageCalc1(1991);
console.log(age1);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

console.log(yearsUntilRetirement(1980, 'Bob'));

