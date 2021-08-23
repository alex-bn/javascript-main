const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

// getting a property from an object

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// this will not work for the .dot notation

//console.log(jonas.'last' + nameKey); // error

// use bracket when you need to compute otherwise use the . notation

const interestedIn = prompt('What do you want to know about Jonas. Choose between firstName, lastName,age, job and friends.');

console.log(jonas.interestedIn); // returns undefined -> interestedIn is not a property, should use the bracket notation
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong property! Choose between firstName, lastName,age, job and friends.')
}

// add new properties to the object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//Challenge  
// "Jonas has 3 friends, and his best friend is called Michael."

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
