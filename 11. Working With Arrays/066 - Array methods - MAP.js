'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

/*

const movementsUsd = movements.map(function (current) {
  return current * eurToUsd;
  // return 23;
});

*/

const movementsUSD = movements.map(current => current * eurToUsd);

console.log(movements);
console.log(movementsUSD);


const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd)
}
console.log(movementsUsdFor);



const movementsDescriptions = movements.map(
  (current, i) =>
    `Transaction ${i + 1}: You ${current > 0 ? 'deposited' : 'withdrew'} ${current}`
);

console.log(movementsDescriptions);