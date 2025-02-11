// *********************
// *** DOM SELECTION ***
// *********************

// 1. Selecting an element using `getElementById`
console.log(document.getElementById("body")); 

// 2. Selecting elements by class name (returns an HTMLCollection)
console.log(document.getElementsByClassName("kuchbhi"));

// 3. Selecting elements by tag name (returns an HTMLCollection)
console.log(document.getElementsByTagName("div"));

// 4. Selecting an element using `querySelector` (returns the first match)
console.log(document.querySelector("#body"));

// 5. Selecting all elements with a class using `querySelectorAll` (returns a NodeList)
console.log(document.querySelectorAll(".kuchbhi"));

// 6. Selecting the <body> element using `getElementsByTagName`
console.log(document.getElementsByTagName("body"));

// *********************
// *** DOM TRAVERSAL ***
// *********************

// 7. Accessing the root <html> element and its children
console.log(document.documentElement.children); // Returns <head> and <body>

// 8. Accessing the first and last child of the document
console.log(document.documentElement.firstChild);  // First child node
console.log(document.documentElement.lastChild);   // Last child node

// 9. The document itself has no parent, so this always returns null
console.log(document.parentNode); 

// *********************
// *** DOM MANIPULATION ***
// *********************

// 10. Changing the text inside the <h1> element
document.getElementById("heading").innerText = "Anything"

// 11. Replacing the entire body content (Not recommended in most cases)
document.getElementsByTagName("body")[0].innerHTML = "<h1>I am changed</h1>";

// 12. Changing innerText of a specific element
document.addEventListener("DOMContentLoaded", function () {
    let currentContainer = document.getElementById("myElement");
    currentContainer.innerText = "Somewhere"; // Now it won't be null!
});

// let currentContainer = document.getElementById("myElement");
// currentContainer.innerText = "Somewhere";

// *********************
// *** DYNAMIC ELEMENT CREATION ***
// *********************

// 13. Creating a new <div> and <button> element
let myElement = document.createElement("div");
let myButton = document.createElement("button");

// 14. Appending button inside the new div
myElement.appendChild(myButton);

// 15. Appending the new div to the body
document.body.appendChild(myElement);

// *********************
// *** EVENT HANDLING ***
// *********************

// 16. Adding a click event listener to the button
myButton.addEventListener('click', () => {
    alert("Button Clicked!");
});

// 17. Adding a hover effect to change background color
myElement.addEventListener('mouseover', () => {
    myElement.style.backgroundColor = "yellow";
});

// 18. Removing the background color when mouse leaves
myElement.addEventListener('mouseleave', () => {
    myElement.style.backgroundColor = "white";
});

// *********************
// *** TIMEOUT FUNCTION ***
// *********************

// 19. Setting text inside the div after 3 seconds
setTimeout(() => {
    myElement.innerText = "Updated after 3 seconds";
}, 3000);

// *********************
// *** SELECTING ALL ELEMENTS ***
// *********************

// 20. Selecting all elements using `getElementsByTagName`
let elements = document.getElementsByTagName("*");
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]); // Logs each element in the document
}

// 21. Using `querySelectorAll` to select all elements
let allElements = document.querySelectorAll("*");
allElements.forEach((element) => {
    console.log(element); // Logs each element in the document
});
