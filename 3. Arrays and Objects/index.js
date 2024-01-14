/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0], numbers[4], numbers[numbers.length - 1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let max = 0;
let min = 999;
let total = 0;
for (let i of numbers) {
    if (i > max) max = i;
    if (i < min) min = i;
    total += i;
}
console.log('Max: ' + max + '\nMin: ' + min + '\nAverage: ' + total / numbers.length)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
// They have similar indexing and can be used for different data types

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    coursecode: "114L",
    name: "IT114L",
    units: 3,
    number_of_students: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Job Lipat";
console.log(IT114L.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const courses = [
    {
      code: 'IT114',
      name: 'Web Systems and Technologies',
      units: 2
    },
    {
      code: 'IT114L',
      name: 'Web Systems and Technologies (Laboratory)',
      units: 1
    },
    {
      code: 'CS120',
      name: 'Structures of Programming',
      units: 3
    },
    {
      code: 'CS102-1',
      name: 'Data Structures and Algorithms Analysis',
      units: 2
    },
    {
      code: 'SS036',
      name: 'Science, Technology and Society',
      units: 3
    },
    {
      code: 'PE044',
      name: 'Physical Activities Toward Health and Fitness',
      units: 2
    },
    {
      code: 'HUM039',
      name: 'Ethics',
      units: 3
    },
    {
      code: 'IT133',
      name: 'Technopreneurship',
      units: 3
    },
  ];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
totalUnits = 0;
for (let course of courses){
    totalUnits += course.units
}
console.log(totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
