///////////////
// Another Class example:

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface of our object (API)
  deposit(val) {
    this.movements.push(val);
  }
  // abstracts the fact that this is a negative movement
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// not recommended
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
acc1.approveLoan(2000); // example of another method that should not be accessible from the outside

console.log(acc1.pin); // it should'nt be accessible from outside the class, to be continued..

// DATA ENCAPSULATION
// DATA PRIVACY
