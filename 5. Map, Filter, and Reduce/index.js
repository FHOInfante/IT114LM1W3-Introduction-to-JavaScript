/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(num => num * num);
console.log(squares)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const filtered = numbers.filter(num => num % 2 == 0);
console.log(filtered);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const reducedToAtoms = numbers.reduce(num => num += num);
console.log(reducedToAtoms);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
// Your code here
const words = ['hello', 'world', 'egg', 'snom', 'bye'];
const upper = words.map(word => word.toUpperCase());
console.log(upper);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const filterWord = words.filter(word => word.length >= 4);
console.log(filterWord);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concat = words.reduce(function (result, word){
    return result + word;
}, "");
console.log(concat);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// Map: create a new array using an different array and transforms each element based of the provided function
// Filter: is the same way as map but it selectively including elements from an existing array based on a specified condition.
// Reduce: reduces the item into a single value by applying a specified function.