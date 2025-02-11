// Creating an array
let value = ["class", "students"];

// Attempting string concatenation with an array
// This does not work as expected because value is an array, not a string.
// let displayMessage = "Hello" + value; 
// let displayMessage = `Hello ${value}`;
// console.log(displayMessage); 

// Accessing elements using index
console.log(value[0]); // Output: "class"

// Attempting to use charAt() on an array (incorrect usage)
// console.log(value.charAt(2)); // Error: charAt is not a function on arrays

// Using slice on an array
// console.log(value.slice(-1)); // Extracts the last element ("students")

// Using replace on an array (incorrect usage)
// Arrays do not have a replace method, this will not work.
// console.log(value.replace("c", "C"));

// Joining array elements into a string
console.log(value.join("-")); // Output: "class-students"
