// Boolean logic - branch of computer science which user true and false values to solve complex logical problems
/*

Operator precedence

The following expressions might seem equivalent, but they are not, because the && operator is executed before the || operator (see operator precedence).

true || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply


*/


const hasDriversLicense = true; // A 
const hasGoodVision = true; // B 

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah can drive the car!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C 

console.log(hasDriversLicense && hasGoodVision && isTired);


// Condition reads as: Sarah is able to drive the car if she has a drivers license, if she has good vision and if she's not tired.

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah can drive the car!');
} else {
    console.log('Someone else should drive...');
}