
// Function declaration

const age1 = calcAge1(1991); // the big difference is that we CAN CALL function declarations BEFORE they are defined in the code

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// const age2 = calcAge2(1991); -> if we call a function expression before initialization we get an error
// anonymous function // function expression -> expressions produce values -> functions are values in fact 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);


console.log(age1, age2);