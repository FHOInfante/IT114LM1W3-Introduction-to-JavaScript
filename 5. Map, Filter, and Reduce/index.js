/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
console.log(numbers.map(num => num * num));

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
console.log(numbers.filter(num => num % 2 == 0))

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
console.log(numbers.reduce(num => num += num))

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
// Your code here
const words = ['hello', 'world', 'egg', 'snom', 'bye'];
console.log(words.map(word => word.toUpperCase()))

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
console.log(words.filter(word => word.length >= 4))

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
console.log(words.filter(word => word.length >= 4))

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// Map: create a new array using an different array and transforms each element based of the provided function
// Filter: is the same way as map but it selectively including elements from an existing array based on a specified condition.
// Reduce: reduces the item into a single value by applying a specified function.