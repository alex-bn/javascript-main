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