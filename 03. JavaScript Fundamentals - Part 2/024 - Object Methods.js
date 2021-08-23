const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: '1991',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //here we can insert a function expression
    // calcAgeOldWay: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // the most efficient way to write this function expression: 
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }
};


// console.log(jonas.calcAgeOldWay(1991)); //using the .(dot) method we can call the function property
// console.log(jonas['calcAgeOldWay'](1991)); // ...or using the bracket method

// we might make a mistake and pass the wrong number, and anyway this is not ideal.
// so we can try to pass the birthYear property directly from the object itself

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas);

// Challenge: 
// "Jonas is a 46-year old teacher, and he has a drivers license."

// My solution (almost):
console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} drivers license.`);
// Jonas solution:

console.log(jonas.getSummary());


















