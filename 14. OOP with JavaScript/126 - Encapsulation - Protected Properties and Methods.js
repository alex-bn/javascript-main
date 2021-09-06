'use strict';

// ONLY a convention between developers to use the character '_' -underscore- to highlight variables or methods that should'nt be changed

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property by the so called convention
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface of our object (API)
  getMovements() {
    // correct way to expose the movements
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    // protected
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// not recommended !!
acc1._movements.push(250);
acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
acc1._approveLoan(2000); // example of another method that should not be accessible from the outside

console.log(acc1.getMovements()); // correct way to obtain the movements!

console.log(acc1._pin); // it should'nt be accessible from outside the class, to be continued..

// DATA ENCAPSULATION
