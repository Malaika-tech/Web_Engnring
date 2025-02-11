//function is a keyword to define a function
function func()
{
    console.log("I am Malaika");
}//func(); there are three ways to a function.
        //=> way-1 = from console call function from console
        //=> way-2 = when define called immediately after definition
        //=> way-3 = 
let greet = function(name){
    return `welcome: ${name}`;
};
console.log(greet("Malaika"));

let arr = function(array)
{
    let seen = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(seen.includes(element)){
             return "Duplicate exists";

        }
        seen.push(element);
    }
    return "duplicate not found";
    
}
console.log(arr([1,2,2,3,4,5]));


//now learning arrow function
let findDuplicate = (element, array) =>{
    let count= 0;
    for(let item of array)
    {
        if(item == element){
            count++;
        }    
    }
    return count >1;
};
console.log(findDuplicate(3,[1,2,2,3,3,4,5]));
//higher order
let multiply = function(a,b){
    return a*b;
}

let add = function(a,b){
    return a+b;
}
let manipulator = function (val1,val2, func){return func(val1,val2);}

// arrow version
let multiple = (a,b) =>{return a*b}
let addition = (a,b) =>{return a+b}
let manipulate = (a,b,func)=>{return func(a,b)}

//nested functions is called closures
//


function counter(){
    let count = 0;
    return function(){
        return count ++;
    }
}
let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

//closure function
let findDuplicates = (array) => {
    return (element) => {
        let count = 0;

        for (let item of array) {
            if (item == element) {
                count++;
            }
        }

        return count > 1;
    }
};

let checkDuplicate = findDuplicates([1, 2, 2, 3, 3, 4, 5]);
console.log(checkDuplicate(3)); 
console.log(checkDuplicate(4)); 


function mul(...val) {
    // let result = 1;
    // for (let number of val) {
    //     result *= number;
    // }
    // return result;  
    setTimeout(2000);
    return val.reduce((acc, current) => acc * current, 1);
}
console.log(mul(2, 3, 4));
console.log(mul(1, 5));    
console.log(mul(7));     

//async is function it uses await function. Jis function m await use krna ho waha asunc lazmi lgy ga
//same like function
//us k andr koi ease excution jo time taking h jo time taking chez hogi us ko await m likh den gy
//setTimeOut(2000);
//function generators
 