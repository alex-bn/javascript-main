
/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
////////////////////////////////////////////////////////////////

// My solution:

// Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// Data 2
let massMark, massJohn;
let heightMark, heightJohn;
massMark = 85;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// BMI(Body Mass Index) formula is BMI = mass / height ** 2 = mass / (height * height)

let bmiMark = massMark / heightMark ** 2;
console.log(`Mark's BMI is ${bmiMark}.`);

let bmiJohn = massJohn / heightJohn ** 2;
console.log(`John's BMI is ${bmiJohn}.`);


markHigherBMI = bmiMark > bmiJohn;
console.log(`Is Mark's BMI higher than John's? Short answer: ${markHigherBMI}`);

if (!markHigherBMI) {
    console.log("Mark's BMI is lower that John's");
} else {
    console.log("Mark's BMI is greater than John's");
}

//////////////////////////////////////////////////////////////
//Jonas solution

//Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//Data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

//uses const by default because he knows the values are not gonna change throughout the code 
//calculate the BMI
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
//log their values
console.log(BMIMark, BMIJohn);
//Step 3
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)