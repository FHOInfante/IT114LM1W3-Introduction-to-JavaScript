/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var greet = "Hey~ brother";

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let snom = "Snom";

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const daga = " ratatatatatatata";

function change(){
    snom = "SNOM";
    greet = "Hey~ sister";
    console.log(snom, greet);
}

change();
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// var is a universal variable which is accessable anywhere inside its funtion
// let is a local variable and only be accessed inside the block of code it was declared
// const is a variable that sets its value as read only

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const num = (10 + 5 / 7 * 18 - 6);
console.log(num);

// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here
// + addition operator
// - subtraction operator
// * multiplication operator
// / division operator
// = assignment operator

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
const all = (greet + " " + snom + " " + daga);
console.log(all);

// Checkpoint 1.3 What operators did you use?
// Answer: 
// + contatination operator
// = assignment operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
var x = true;
var y = true;
if (x && y ) {console.log("They are both True");}
else {console.log("They are not both True");}

// Checkpoint 1.4 What operators did you use?
// Answer:
// = assignment operator
// && Logical AND operator


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const poke = ["Snom", "Ratata", "Blaziken"];
console.log(0 in poke);
console.log(4 in poke);
console.log([] == false);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
// true, it checks if the array is empty or not