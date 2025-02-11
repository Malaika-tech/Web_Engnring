// console.log(document.getElementById("body")); 
// console.log(document.getElementsByClassName("kuchbhi")); //  Returns the div

// console.log(document.getElementsByTagName("div")); // Correct usage

// console.log(document.querySelector("#body")); // Works (same as getElementById)

// console.log(document.querySelectorAll(".kuchbhi")); // Selects all elements with class "kuchbhi"

// console.log(document.getElementsByTagName("body")); // Returns the <body> element
// console.log(document.parentNode); // Always null (document has no parent)
// console.log(document.documentElement.children); // Returns <head> and <body>

// console.log(document.documentElement.firstChild);

// console.log(document.documentElement.lastChild);

// console.log(document.getElementById("heading").innerText="Anything");
// console.log(document.getElementsByTagName("body").innerHTML="<h1>I am changed</h1>");
// let currentContainer=document.getElementById("myElement");
// currentContainer.innerText="Somewhere";
// console.log(document.getElementById);

// console.log(currentContainer);
// let myElement = document.createElement("div");
// let myButton = document.createElement("button");
// myElement.appendChild(myButton);
// document.body.appendChild(myElement);
// //we can traverse and delete document by using remove
// //document.myElement.remove();

// // myButton.addEventListener('click',()=>{
// //     alert("I am changed");
// // });

// // myElement.addEventListener('click',increment);
// // let count =0;

// // myElement.innerText=count;
// // function incrementCount(){
// //     return count++;
// // }
// // myElement.addEventListener('mouseover',()=>{
// //     myElement.style.backgroundColor = "yellow";
// // });
// // myElement.addEventListener('mouseleave',()=>{
// //     myElement.backgroundColor='white'});

// //     setTimeout(() => {
// //         myElement.innerText = count;
// //     }, 3000);

// let elements = document.getElementsByTagName("*");
// for(let i=0;i<elements.length;i++)
// {
//     console.log(elements[i]);
// }
let elements = document.querySelectorAll("*");

elements.forEach((x)=>{
console.log(elements);
});