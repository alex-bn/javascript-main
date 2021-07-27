// Data types & DYNAMIC TYPING

// JavaScript has dynamic typing: we do NOT have to manually define the type of a value stored inside of a variable. Instead, data types, are determined automatically --> Value has type, NOT variable!

let javaScriptIsFun = true;
console.log(1, javaScriptIsFun);

// console.log(2, typeof false);
console.log(3, typeof javaScriptIsFun);
// console.log(4, typeof 37);
// console.log(5, typeof 'Alex');

javaScriptIsFun = "YES this is DYNAMIC TYPING in action , you change the type of a value without declaring it like at the beginning using the 'let' operator";
console.log(6, typeof javaScriptIsFun);
console.log(javaScriptIsFun);


// UNDEFINED types

let year;
console.log(year);
console.log(typeof year);

// whenever you declare an empty variable, the value of the variable will be undefined and the type of the variable is also undefined - > undefined is both the value and the type of the value 

year = 1991;
console.log(year);
console.log(typeof year);


// NULL

console.log(typeof null);
// keep this in mind, javascript says that type of null is of object
// this is regarded as an error that exists in the typeof operator
// is regarded as a bug and is never corrected for legacy reasons 
// null is not an object, it should return undefined as undefined does