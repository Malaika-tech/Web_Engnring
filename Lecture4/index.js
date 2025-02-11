// Creating an array using both literal and constructor syntax
let fruits = ["Apple", "Banana", "Orange"];
let fruitsAlt = new Array("Apple", "Banana", "Orange");

// Accessing elements
console.log(fruits[1]); // Output: Banana

// Using splice to add/remove elements
// splice(index, number of elements to remove, elements to add)
fruits.splice(2, 4, "Apple", "Apricot", "Guava");
console.log(fruits);

// Using slice to extract a portion (does not modify the original array)
console.log(fruits.slice(1, 3));

// Finding index of an element
console.log(fruits.indexOf("Apple"));

// Using forEach to print elements in uppercase
fruits.forEach(value => console.log(value.toUpperCase()));

// Filtering elements that match a condition
console.log(fruits.filter(val => val === "Apple"));

// Mapping elements to a new array with HTML list items
let htmlListTitle = fruits.map(val => "<li>" + val + "</li>");
console.log(htmlListTitle);

// Using reduce to multiply values in an array
let values = [1, 2, 35, 8, 9];
let result = values.reduce((acc, val) => acc * val, 1);
console.log(result);

// Using reduce to create an HTML list
let res = fruits.reduce((acc, val) => acc + "<li>" + val + "</li>", "<ul>");
console.log(res += "</ul>");

// Working with nested arrays
let number = [[1, 2, 3, 4, 5], [9, 10]];

// Flattening the nested array into a single array
let join = number.reduce((acc, val) => acc.concat(val), []);
console.log(join);

// Using Set to store unique values (removes duplicates)
let valueset = new Set([1, 1, 2, 3, 3]);
console.log(valueset);
