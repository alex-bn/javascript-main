const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// data structure -> arrays
const yearsY = new Array(1992, 1992, 1992, 1984, 2018);
console.log(yearsY);
console.log(yearsY.length);


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

// nr of elements in an array
console.log(friends.length);

// retrieving the last element
console.log(friends[friends.length - 1]);


// adding/removing elements 
// manually
friends[2] = 'Jay-Z';
console.log(friends[2]);

const firstName = 'Jonas'
const jonas = [firstName, 'jay-z', '2037-1991', 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise:
today = new Date();
currentYear = today.getFullYear();
console.log(currentYear);

const calcAge = function (birthYear) {
    return currentYear - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}