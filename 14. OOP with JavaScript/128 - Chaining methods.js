'use strict';

// Chaining methods:

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods / public interfaces of the class
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }

  // Static Methods
  static helper() {
    console.log('Loan approved!');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.#movements.push(250); //Private field -> syntax error
// acc1.#movements.push(-140);
// console.log(acc1.#movements());

// console.log(acc1.#in); // Private filed. Not accessible

// acc1.#approveLoan(2000); // Private method, not accessible from the outside

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
Account.helper(); // Static method, is attached only to the class and will not be available on the instances

/// Chaining Methods - > in order for this to work you need the result of each method to be an account, so all you have to do is to call 'return this;' on all chained methods /// returning 'this' will make the method chainable
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); // not gonna work

console.log(acc1.getMovements());
