// Function Declaration (Named Function)
function greet() {
    console.log("I am Malaika");
}

// Function Invocation (3 ways to call a function):
// 1. Call from the console
// 2. Call immediately after definition
// 3. Assign to a variable and invoke

// Function Expression (Anonymous Function stored in a variable)
let welcome = function(name) {
    return `Welcome: ${name}`;
};
console.log(welcome("Malaika"));

// Function to check for duplicates in an array using a loop
let checkDuplicates = function(array) {
    let seen = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (seen.includes(element)) {
            return "Duplicate exists";
        }
        seen.push(element);
    }
    return "No duplicates found";
};
console.log(checkDuplicates([1, 2, 2, 3, 4, 5]));

// Arrow Function Syntax
let findDuplicate = (element, array) => {
    let count = 0;
    for (let item of array) {
        if (item === element) {
            count++;
        }
    }
    return count > 1;
};
console.log(findDuplicate(3, [1, 2, 2, 3, 3, 4, 5]));

// Higher Order Function (Function that accepts another function as an argument)
let multiply = function(a, b) {
    return a * b;
};
let add = function(a, b) {
    return a + b;
};
let manipulator = function(val1, val2, func) {
    return func(val1, val2);
};

// Arrow Function version
let multiplyArrow = (a, b) => a * b;
let addArrow = (a, b) => a + b;
let manipulateArrow = (a, b, func) => func(a, b);

// Closures (Nested Functions with Lexical Scope)
function counter() {
    let count = 0;
    return function() {
        return count++;
    };
}
let increment = counter();
console.log(increment()); // 0
console.log(increment()); // 1
console.log(increment()); // 2

// Function Closure to check for duplicates
let findDuplicatesClosure = (array) => {
    return (element) => {
        let count = 0;
        for (let item of array) {
            if (item === element) {
                count++;
            }
        }
        return count > 1;
    };
};
let checkDup = findDuplicatesClosure([1, 2, 2, 3, 3, 4, 5]);
console.log(checkDup(3)); // true
console.log(checkDup(4)); // false

// Function using Rest Operator (Accepts multiple arguments as an array)
function multiplyAll(...values) {
    return values.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyAll(2, 3, 4)); // 24
console.log(multiplyAll(1, 5));    // 5

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("I am invoked immediately");
})();

// Function to find duplicates using an object to count occurrences
const findDuplicatesObj = (array) => {
    let elementCount = {};
    let duplicates = [];
    
    array.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });
    
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicates.push(element);
        }
    }
    return duplicates;
};
console.log(findDuplicatesObj([1, 2, 3, 4, 3, 5, 1])); // [ '1', '3' ]

// Higher Order Function Example
let calculate = function(val1, val2, func) {
    return func(val1, val2);
};
console.log(calculate(3, 5, multiply));

// Closures Example with Duplicate Finder
const createDuplicateFinder = () => {
    let seen = new Set();
    let duplicates = [];
    return (array) => {
        array.forEach(value => {
            if (seen.has(value)) {
                duplicates.push(value);
            } else {
                seen.add(value);
            }
        });
        return duplicates;
    };
};
const findDuplicates = createDuplicateFinder();
console.log(findDuplicates([1, 2, 3, 4, 3, 5, 1])); // [3, 1]

// Async/Await Function (Used for handling asynchronous operations)
async function fetchData() {
    console.log("Fetching data...");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating delay
    console.log("Data fetched");
}
fetchData();