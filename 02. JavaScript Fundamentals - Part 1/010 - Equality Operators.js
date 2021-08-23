const age = 12;
if (age === 18) {
    console.log('Strict operator === the operands are equal and of the same type')
} else {
    console.log('Strict operator === the values you are comparing are not of the same type or dont carry the same values.')
}

if (age == 18) {
    console.log('Loose operator == the operands are equal')
} else {
    console.log('Loose operator == the operands are not equal')
}


// Strict equal ( === ) returns true if the operands are equal and of the same type. It does not perform type coercion.

// Equal (==) 	Returns true if the operands are equal, == does type coercion.

// it is recommended to use the strict operator! instead

///////////////////////////////////////////////////////////////

const fav = Number(prompt('Whats your favorite number?'));
console.log(fav);
console.log(typeof fav); //saves it as a string

if (fav === 23) {
    console.log('23 was inserted')
} else if (fav === 1) {
    console.log('1 was inserted')
} else if (fav === 9) {
    console.log('11 was inserted')
} else {
    console.log('number is not 23 or 1 or 11')
}


////////////////////////////////////////////////////////////

// different operator -> recommended the strict version 
// Not equal (loose) (!=) 	Returns true if the operands are not equal.
// Strict not equal (!==) 	Returns true if the operands are of the same type but not equal, or are of different type.


if (fav !== 23) console.log('Why not 23?')









