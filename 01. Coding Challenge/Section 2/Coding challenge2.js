// // Use the BMI example from Challenge #1, and the code you already wrote, and
// // improve it.
// // Your tasks:
// // 1. Print a nice output to the console, saying who has the higher BMI. The message
// // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// // BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement
// ////////////////////////////////////////////////////////////////

// Data set 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//Data set 2
const massMark = 85;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// BMI(Body Mass Index) formula is BMI = mass / height ** 2 = mass / (height * height)

const bmiMark = (massMark / heightMark ** 2).toFixed(2);
console.log(`Mark's BMI is ${bmiMark}`);

const bmiJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);
console.log(`John's BMI is ${bmiJohn}`);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher that John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is greater than Mark's (${bmiMark})!`);
}

// //Nu am declarat conditia iar in structura de control if-else folosesc o variabila nedeclarata, ceea ce nu cred ca e bine. Jonas a folosit direct conditia, codul lui este mai clar!!!!
// Inca ceva, am pus .toFixed de fiecare data cand chemama variabilele de BMI cand puteam sa pun direct la formula de calcul si sa nu mai doara capul apoi..
// Am fixat toate mizeriile astea + logica mea era rupta pe genunchi, daca bmiMark > bmiJohn eu afisam ca John;s bmi is greater ... long story-medium .. am fixat 
// /////////////////////

// //Jonas solution:


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 85;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;


// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`)
// }