'use strict';
let today = new Date();

function calcAge(birthYear) {
    const age = today.getFullYear() - birthYear;
    console.log(age);

    function printAge() {
        let output = `${firstName} ,you are are ${age} born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            // same name as outerscope variable
            const firstName = 'Steven';
            const str = `Oh, and you're a millennial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';//redefining a variable from the outer scope
        }
        //console.log(str);// const and let are block-scoped so this will return an error
        console.log(millennial);
        //console.log(add(2, 3)); // works only without strict mode! functions are also block-scoped.
        console.log(output);

    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1984);

//console.log(age); // scope chain is a one way street and you cannot have access to a child scope
//printAge();// same goes for functions