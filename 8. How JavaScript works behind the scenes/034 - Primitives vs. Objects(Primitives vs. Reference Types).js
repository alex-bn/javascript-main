// Scenario 1
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Scenario 2
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

console.log(me);
console.log(friend);

friend.age = 27;
console.log('Friend', friend);
console.log(me);
// as you can see both jonas and friend have the same age
// source of confusion :
// me and friend actually point to the exact same object in the memory heap
// so when changing something it will reflect in both references
// copying an object will create a new variable that point to the exact same object

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);
// it works as expected because each primitive value will be saved into its own piece of memory in the stack

// reference types
// object -> is a referenced value because it is going to be stored in the heap and the stack just keeps a reference to the memory position at which the object is stored ion the heap

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
// it looks like we're copying the entire object but behind the scene we're actually just copying the reference which will then point to the same object

marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
// it happened because when we attempted to copy the original jessica object it did in fact not crete a new object in the heap, it's simply just another variable in the stack which holds the reference to the original object, so both of these two variables simply point to exactly the same memory address in the heap, and that's because in the stack they both hold the same address memory reference, so changing a property on an object will reflect on both, essentially we have two different names for the same object

// we are allowed to change properties in the marriedJessica object that was declared using const keyword (constant/immutable), however what actually needs to be constant is the value in the stack (D30F that holds the reference in the memory heap which we are not actually changing), the only

// marriedJessica = {} // this does not work because we cannot change the value to a new memory address because we used the const keyword

// actually copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);
// this work because a new object was created in the heap and jessicaCopy now points to that new object

// however there is still a problem : if we have an object inside the object we are copying, the inner object will still be the same when using the technique of Object.assign(), that's why we say that Object.assign() only creates a shallow copy and not a deep clone(copies everything)

// showcase

const player1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const player2 = Object.assign({}, player1);
player2.firstName = 'Jerry';
console.log(player1);
console.log(player2);

player2.family.push('Mary');
player2.family.push('John');

// both objects have the same array due to the shallow copy of the Object.assign() technique

console.log(player1);
console.log(player2);

// deep cloning is beyond the scope of this lesson but look for lodash and check it out!
