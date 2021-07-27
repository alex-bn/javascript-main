
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// Challenge: transform the above function into an arrow function

const greet = greeting => {
    return name => console.log(`${greeting} ${name}`);
}

// Jonas solution: 

const greeterArr = greeter => name => console.log(`${greeter} ${name}`);

greeterArr('Hey')('Alex')


const greeterHey = greet('Hey')

greeterHey('Jonas')

greet('Hello')('Jonas');

