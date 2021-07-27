'use strict';

/*

Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

const Data1 = [5, 2, 4, 1, 15, 8, 3]
const Data2 = [16, 6, 10, 5, 6, 1, 4]


const calcAverageHumanAge = function (ages) {
  const humanYears = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  console.log(humanYears);

  const major = humanYears.filter(function (age) {
    return age >= 18;
  })
  console.log(major);

  const average = major.reduce(function (sum, age) {
    return sum + age;
  }, 0) / major.length;
  console.log(average);
};

calcAverageHumanAge(Data1);
calcAverageHumanAge(Data2);


// Jonas Solution 

const calcAverageHumanAge1 = function (age) {
  const humanAges = age.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // 2 3. (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0)

  return `The average age is: ${average}`;
};

const avg1 = calcAverageHumanAge1(Data1);
const avg2 = calcAverageHumanAge1(Data2);

console.log(avg1, avg2);


const calcAverageHumanAgeChain = age.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0)

