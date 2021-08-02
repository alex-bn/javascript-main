const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); // will bring all nested elements under the same array / removes the nested array and flattens the array


const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // default level of nesting is 1 -> flat method goes only one level deep 

console.log(arrDeep.flat(2)); // 2 represents the level of nesting 


// bank wants to calculate the overall balance of all the accounts 

// FLAT and FLATMAP 
// example: bank wants to calculate the overall balance of all the accounts 

// FLAT
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


//FLATMAP -> it goes only 1 level deep and CANNOT be changed
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);