//let fruits=["Apple","Banana","Orange"]; new Array with capital letter is object.
let fruits = new Array("Apple","Banana","Orange");
// console.log(fruits[1]);
//fruits.splice(indexvalue, numberofelements, value); 
// fruits.splice(2,4,"Apple","Apricot","Guava");
// console.log(fruits);
// fruits.slice(1,3);
// fruits.indexOf("Apple");
// console.log(fruits.indexOf("Apple"));
// fruits.forEach((value) => console.log(value.toUpperCase()));
// console.log(fruits.filter(val=>val==="Apple"));
// let htmllisttitle = fruits.map(val=>"<li>"+val+"</li>");
// console.log(htmllisttitle);
//reduce has two values 1st (Result) and 2nd (current) then definition and default value.
// let values = [1,2,35,8,9];
// let result = values.reduce(((acc,val) => acc * val),1);
// console.log(result);

// let res = fruits.reduce(((acc,val) => acc + "<li>" +val+ "</li>"), "<ul>");
// console.log(res+="</ul>");

let number = [[1,2,3,4,5],[9,10]];
// let max = number.reduce(((acc,val)=> acc> val? acc:val),number[0]);
// console.log(max);
let join = number.reduce(((acc,val)=> acc.concat(val)),[]);
console.log(join);

let valueset = new Set([1,1,2,3,3]);
console.log(valueset);
