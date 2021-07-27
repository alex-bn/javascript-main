// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Calculate the average score for each team, using the test data above


//Data 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreKoalas, scoreDolphins);

// // Compare the team's average scores to determine the winner of the competition,
// // and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)

// if (scoreKoalas > scoreDolphins) {
//     console.log(`Competition is won by the Koalas team!`);
// } else if (scoreKoalas === scoreDolphins) {
//     console.log(`The competition ends with a draw!`);
// } else {
//     console.log(`Competition is won by the Dolphins team!`);
// }


// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// // const scoreDolphins = (97 + 112 + 101) / 3;
// // const scoreKoalas = (109 + 95 + 106 ) / 3;

// console.log(scoreKoalas, scoreDolphins);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Competition is won by the Dolphins`);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log(`Competition is won by the Koalas team!`);
// } else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log(`The game is a draw but both teams have at elast 100 de puncte!`);
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 && scoreKoalas < 100) {
//     console.log(`Delfinii castiga`);
// } else if (scoreDolphins < scoreKoalas && scoreDolphins < 100 && scoreKoalas >= 100) {
//     console.log(`Koalas castiga`);
// } else if (scoreDolphins === scoreKoalas && scoreKoalas < 100 && scoreDolphins < 100) {
//     console.log(`Egalitate dar ambele echipe au sub 100!`)
// } else if (scoreDolphins > scoreKoalas && scoreDolphins < 100 && scoreKoalas < 100) {
//     console.log(`Castiga delfinii dar ambele echipe au sub 100`)
// } else if (scoreDolphins < scoreKoalas && scoreDolphins < 100 && scoreKoalas < 100) {
//     console.log(`Castiga Koalas dar ambele echipe au sub 100`)
// } else {
//     console.log(`Error: Something unaccounted for....`)
// };

// Am facut mai mult decat trebuie.. Jonas solution: 

const scoreDolphins = 102;//(97 + 112 + 101) / 3;
const scoreKoalas = 101;//(109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win!`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas win!`);
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`Egalite, fraternite`);
} else {
    console.log(`no one wins the trophy`);
}




