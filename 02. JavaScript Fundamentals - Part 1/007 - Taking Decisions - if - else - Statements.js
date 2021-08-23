
// if-else control structure
/*

if (condition - > any code that return a boolean value) {
    execute this block of code in case of given boolean value, like so: value or !value
} else {
    execute this block of code
}

*/
// example:
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// example 2
const birthYear = 2000;
// for this to work you need to define the century variable outside of the if-else blocks
// any variable declared inside the if-else blocks will not be accessible outside of the blocks(for reasons we shall discuss later in the course .. so he says)

// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }

// console.log(century); // if you try to read century before declaring the variable outside the if-else structure you will get an error -> '...js:33 Uncaught ReferenceError: century is not defined'

// so in order for this to work you need to declare it outside and simply leave it empty, like so:
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); // and as you can see, now we can conditionally reassign the variable according to the code needs.