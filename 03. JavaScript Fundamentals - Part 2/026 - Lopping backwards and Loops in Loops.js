// Looping backwardsconst 

jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

//
console.log('---------- LOOPING BACKWARDS ----------');
for (let i = jonas.length - 1; i >= 0; i--) {
    //console.log(jonas[i]);
}

console.log('---------- LOOPING FORWARD ----------')
for (let i = 0; i < jonas.length; i++) {
    //console.log(jonas[i]);
}


// Loop inside a Loop 

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise ${exercise} ----------`);

    for (let i = 1; i < 6; i++) {
        console.log(`Exercise${exercise} repetition ${i}`)

        for (let j = 1; j < 3; j++) {
            console.log(`Loop inside loop ${j}`);
        }


    }
}