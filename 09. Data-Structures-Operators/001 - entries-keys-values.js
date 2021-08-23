// Array.prototype.entries()

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. 

const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

for (const [index, element] of array1.entries())
    console.log(index, element);

for (let e of iterator1) {
    console.log(e);
}

// Array.prototype.keys()

// The keys() method return a new Array Iterator object that contains the keys foe each index in the array

const array2 = ['a', 'b', 'c'];
const iterator2 = array2.keys();
for (const key of iterator2) {
    console.log(key);
}

// Array.prototype.values()

// The values() method returns a new Array Iterator object that contains the values for each index in the array

const array3 = ['a', 'b', 'c'];
const iterator3 = array3.values();

for (const value of iterator3) {
    console.log(value);
}

const array4 = ['a', 'b', 'c', 'd', 'e'];
const iterator4 = array4.values();
for (let letter of iterator4) {
    console.log(letter);
}



// Object.entries()

// The Object.entries() method returns an array of a given enumerable string-keyed property [key, value] pairs
// order is not guaranteed 

const object1 = {
    a: 'something',
    b: 32
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
console.log(Object.entries(object1));

// Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const object2 = {
    a: 'something',
    b: 54,
    c: false
};

console.log(Object.keys(object2));

// Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values


const object3 = {
    a: 'something',
    b: 32,
    c: true
};

console.log(Object.values(object3));