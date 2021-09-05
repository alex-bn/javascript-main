// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// Parent Class
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};
// Parent methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Child Class
const EV = function (speed, make, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};
// Linking the child class to the parent class
EV.prototype = Object.create(Car.prototype);

// Child methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = this.charge - this.charge * 0.01;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

// Creating a subclass object
const tesla = new EV(120, 'Tesla', 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
