
// JavaScript distinguishes expressions and statements.

// An expression produces a value and can be written wherever a value is expected, for example as an argument in a function call.Each of the following lines contains an expression:

// myvar
// 3 + x
// myfunc("a", "b")


// Roughly, a statement performs an action.Loops and if statements are examples of statements.A program is basically a sequence of statements(we’re ignoring declarations here).Wherever JavaScript expects a statement, you can also write an expression.Such a statement is called an expression statement.The reverse does not hold: you cannot write a statement where JavaScript expects an expression.For example, an if statement cannot become the argument of a function.

// expression = produces a value

3 + 4;
1991; //also an expression 
true && false && !false

// statements = perform an action

if (23 > 10) {
    const str = 'this is a statement';
}


// if (condition) {
//     //execute code
// } else {
//     //execute code
// }
// Statements & expressions exists and expressions produce values and statements are like full sentences that translate OR actions, so the actions that we want the program to perform.

// in a template literal you can only insert expressions and not statements.

const me = 'Jonas';
console.log(`I'm ${2040 - 1984} years old and I go by ${if (23 > 10) {
    const str = 'this is a statement';
}}`);