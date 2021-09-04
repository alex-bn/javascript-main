// object.create - manually set the prototype of an object to any other object

const PersonPrototype = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPrototype);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === PersonPrototype);

const sarah = Object.create(PersonPrototype);
sarah.init('Sarah', 2000);
sarah.calcAge();
