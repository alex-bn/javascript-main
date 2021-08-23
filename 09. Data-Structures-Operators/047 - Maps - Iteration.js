'use strict';


console.log(question); // the result of this log looks pretty similar with the result of the next log

console.log(Object.entries(openingHours)); // the result of this log looks pretty similar to the result of the above log

// Converting from objects to maps:

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Remember that Object.entries(object) method converts an object to an iterable 

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer === 3 ? question.get(true) : question.get(false));

// jonas solution
console.log(question.get(question.get('correct') === answer));

// Converting a map back to an array
console.log([...question]);

// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);