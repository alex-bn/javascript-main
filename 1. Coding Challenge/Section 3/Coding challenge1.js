'use strict';

// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// score1 = 44;
// score2 = 23;
// score3 = 71;


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// //Data 1
// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// //Data 2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(27, 34, 23);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas && avgDolphins / avgKoalas >= 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//     } else if (avgKoalas >= avgDolphins && avgKoalas / avgKoalas >= 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
//     } else {
//         console.log(`There is no winner to take the cup!`);
//     }
// }

// const result = checkWinner(avgDolphins, avgKoalas);
// console.log(result);

/// Jonas solution 

const calcAverage = (a, b, c) => (a + b + c) / 3;
// test calcAverage
console.log(calcAverage(3, 4, 5));

// Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// test scores
console.log(scoreKoalas, scoreDolphins);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log(`There is no winner to take the cup!`);
    }
}
// call function to check your result
checkWinner(scoreDolphins, scoreKoalas);
//any other values will work as well as
checkWinner(25, 50);
//Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(27, 34, 23); w3resources
checkWinner(scoreDolphins, scoreKoalas);