/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Hello " + name)
}
greet("Homer")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
// The main difference is their syntax and hoisting behavior where function declaration can be called even before they
// appear on the code while Function Expressions need to have a variable assignment before the function is called

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width){
    return length * width;
}

const getArea = calculateArea(5, 10);
console.log(getArea);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
// It's a  function passed as an argument to another function.
// Example: Using a Callback Function

function one(two) {
    setTimeout(function() {
        console.log("Task completed!");
        two();}, 1000); 
}
function two() {
    console.log("Callback function executed!");
}
one(two);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(newArray, modifiyingFunc){
    return newArray.map(modifiyingFunc)
}

const increment = modifyArray(numbers, function(num){
    return num += 1;
});

console.log("Original Numbers Array: ", numbers)
console.log("Modified Numbers Array: ", increment);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const { add, PI } = require("./mathUtils.js");
console.log(add(2, 5));
console.log(PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
//                              Still having errors
import isPalindrome from "./isPalindrome.js";
console.log(isPalindrome('snom'));
console.log(isPalindrome('radar'));
//                              Still having errors

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// The require function is used to import modules (files or packages) in Node.js. 
// while module.exports is used to defie exports of a module in Node.js

// It depends on the environment, project requirements, and personal or team preferences 
// for which of the two they would use
