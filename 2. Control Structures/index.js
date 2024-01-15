/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber);
// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) console.log("Random Number is more than fifty");
else console.log("Random Number is less than fifty");

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber / 2 == 0) console.log("Random number is an even number");
else console.log("Random number is an odd number");


// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 == 0) console.log("fizz");
else if (randomNumber % 5 == 0) console.log('buzz');
else if (randomNumber % 3 == 0 && randomNumber % 5 == 0) console.log('fizzbuzz');
else console.log(randomNumber);

let toDisplay = "";
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay", toDisplay);
console.log(randomNumber % 2 == 0? "Even" : "Odd")

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer:
// best used to select one of many blocks to be executed or long nested if/else statements

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 0; i < n; i++) console.log(i);

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

console.log("While Loop")
let countNum1 = 0;
while (countNum1 < list.length) console.log(list[countNum1++]);

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: 

console.log("\nDo While Loop");
let countNum2 = 0;
do{console.log(list[countNum2++]); }while (countNum2 < list.length);

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("\nFor of Loop");
for (let item of list) console.log(item); 

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("\nFor in Loop");
for (let i in list) console.log(list[i]); 

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("\nForeach Loop")
list.forEach(stuff => console.log(stuff));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
// for of : getting the items inside the list
// for in : getting the index of each item in the list
// foreach : only used for arrays :] 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"

console.log('\nTry Catch')
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try{
    const quotient = numerator / denominator;
    if (denominator == 0) throw Error("Division by Zero");
    else console.log(quotient);
}

catch(error){
    console.log('ERROR')
}

finally{
    console.log('Cleaning up Resources');
}

