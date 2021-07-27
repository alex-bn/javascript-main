// Loops -> used to automate repetitive tasks 

// console.log('Repetion task, take 1');
// console.log('Repetion task, take 2');
// console.log('Repetion task, take 3');
// console.log('Repetion task, take 4');
// console.log('Repetion task, take 5');
// console.log('Repetion task, take 6');
// console.log('Repetion task, take 7');
// console.log('Repetion task, take 8');
// console.log('Repetion task, take 9');
// console.log('Repetion task, take 10');


// for loop keeps running while condition is TRUE

// for (let i = 1; i <= 10; i++) {
//     console.log(`Repetition task, take ${i}.`);
// };

// Looping arrays, breaking and continuing 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];



for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

today = new Date();
currentYear = today.getFullYear();

const years = [1999, 2007, 1969, 2020];
const ages = [];

for (i = 0; i < years.length; i++) {
    ages.push(currentYear - years[i])
}
console.log(ages);

// continue and break 

// continue is the exit the current iteration of the loop and continue to the next one

// break is used to completely terminate the whole loop 

console.log('------ONLY STRINGS------');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('------BREAK WITH NUMBER------');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
