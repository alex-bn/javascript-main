for (let i = 1; i <= 10; i++) {
    console.log(`Repetition from if loop ${i}`);
}



// same implementation using the while loop

let i = 1;
while (i <= 10) {
    console.log(`Repetition from while loop ${i}`);
    i++;
}


// example that does not depend on a counter
// dice rolling 

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`Loop is about to end ..... `);
}