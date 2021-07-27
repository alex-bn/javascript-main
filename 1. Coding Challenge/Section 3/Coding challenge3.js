const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
// console.log(mark.calcBMI());
// console.log(john.calcBMI());

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi ? 'higher' : 'lower'} than ${mark.fullName}'s (${mark.bmi})!`);