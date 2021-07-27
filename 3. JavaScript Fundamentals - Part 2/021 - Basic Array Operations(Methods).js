// push method -> adds to the end of the array

const friends = ['Kyky', 'Myky', 'Tyky'];
const newLength = friends.push('Cycy'); // will mutate the previous array 
console.log(friends);
console.log(newLength);
// push is a function that can also return the value of the new array


// unshift method -> adds and element right at the beginning of the array

friends.unshift('Pypy');
console.log(friends);
// unshift method can also return the length of the array when saved in a variable


// pop method - > opposite of the push method -> remove element from the end of the array
friends.pop(); // Cycy removed 
console.log(friends);
const popped = friends.pop(); // method will return the removed element when saved inside a
console.log(friends);
console.log(popped);

//shift method - > opposite of the unshift method -> remove element from the beginning of the array

console.log(friends);
friends.shift(); // can also return the element that was removed
console.log(friends);

// indexOf method - > returns the index of the element
console.log(friends.indexOf('Kyky'));
console.log(friends.indexOf('Myky'));
console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('Jonas'));

// includes method - > ES6 method -> true if it's in the array and false if it's not
friends.push(23);
console.log(friends);


console.log(friends.includes('Kyky')); // true if it's in the array 
console.log(friends.includes('Ken')); // false if it's not in the array 
console.log(friends.includes('23')); // uses strict equality, it dow not do type coercion 
console.log(friends.includes(23)); // return true -> 23 ===23 
// includes method is useful to write conditionals!!!

if (friends.includes('Kyky')) {
    console.log('You have a friend called Kyky');
} else {
    console.log("Don't know");
}

