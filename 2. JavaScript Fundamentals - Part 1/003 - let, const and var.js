// let and const were introduced in ES6
// let and const are part of the modern javascript
// var is the old way of declaring variables 

1
// creates a mutable variable
// allows reassigning the value of a variable 
// 'we mutate the age variable' -> that's what they say when that change happens  

//let age;
let age = 30;
age = 31;

2
//const is used to declare variable that are not supposed to change at any time in the future
// the value of a const variable cannot be changed
// creates a variable that cannot be mutated (immutable)


const birthYear = 1984;
// birthYear = 1991;

// const job; // illegal, const variable cannot be undefined

3
// legacy method, prior to ES6, -> using the var keyword
// it should be completely avoided 
// 


var job = 'starting value';
job = 'allows mutation';
console.log(job);

// terrible idea ... because this doesn't create a variable in the current, so called scope, instead js will create a property on the global object.
lastName = 'Bajan';
console.log(lastName);

// IMPORTANT IS TO DECLARE VARIABLES 