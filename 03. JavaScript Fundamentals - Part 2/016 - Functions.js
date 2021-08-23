'use strict';

// function = a piece of re-usable code, a bit like a variable but for whole chunks of code that

function logger() {
    console.log('My name is Jonas')
        ;
}

// calling / running / invoking 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const test = fruitProcessor(1, 2);
console.log(test);

const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);


console.log(fruitProcessor(19, 22));


const appleOrangeJuice = fruitProcessor(6, 9);
console.log(appleOrangeJuice);

// built in functions -> console.log(), Number('23')
console.log(Number('23'));