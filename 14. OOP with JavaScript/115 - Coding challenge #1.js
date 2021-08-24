/*

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120km/h
DATA CAR 2: 'Mercedes' going at 95km/h

*/

// Function Constructor:
const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  // console.log(this.currentSpeed + 10); // MISTAKE!
  this.currentSpeed = this.currentSpeed + 10;
  console.log(this.currentSpeed);
};

Car.prototype.brake = function () {
  // console.log(this.currentSpeed - 5); // MISTAKE
  this.currentSpeed = this.currentSpeed - 5;
  console.log(this.currentSpeed);
};
console.log(car1);
console.log(car2);

car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();
car1.accelerate();

car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.accelerate();

// ES6 Class:
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerateCl() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  breakCl() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
}

const carCl = new CarCl('Olcit', 60);
carCl.accelerateCl();
carCl.accelerateCl();
carCl.accelerateCl();
carCl.accelerateCl();
carCl.accelerateCl();
carCl.breakCl();

// jonas solution:

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate1 = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake1 = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate1();
// bmw.accelerate1();
// bmw.brake1();
// bmw.accelerate1();
