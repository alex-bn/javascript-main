'use strict';


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// counter variable in the for of loop


// for (const movement of movements) 
for (const [i, movement] of movements.entries()) { // first element is the index and the second is the current element of the array <- entries() 
    if (movement > 0) {
        console.log(`Transaction ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

// forEach loops through the array and for each iteration executes the callback, so for each element of the array it will pass it in to the function as an argument


// continue and break do not work in the FOREACH loop

console.log('--- FOREACH ---'); // forEach takes a callback function  
movements.forEach(function (movement, index, array) { // !!! order is important: 1st param = current element, 2ns = current index, 3rd param = the entire array that we are looping
    if (movement > 0) {
        console.log(`Transaction ${index + 1}: You deposited ${movement}`);
    } else {
        console.log(`Transaction ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
})

// iteration 0: function(200)
// iteration 1: function(450)
// iteration 2: function(450)
// ...

