// Creating a promise that resolves immediately
const promise = new Promise((resolve, reject) => {
    resolve(1); // Resolving with value 1
});

// Creating another promise that resolves after 2 seconds
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000); // Resolves with value 2 after 2 seconds
});

// Using Promise.all() to wait for both promises to settle
Promise.all([promise, promise2])
    .then((res) => {
        console.log(res); // Expected output: [1, 2] after 2 seconds
    })
    .catch((err) => {
        console.error(err); // This will execute only if any promise rejects
    });

// Explanation:
// - `promise` resolves immediately with `1`.
// - `promise2` resolves after 2 seconds with `2`.
// - `Promise.all([promise, promise2])` waits for both to resolve.
// - After 2 seconds, `.then()` executes and logs `[1, 2]`.
// - If any promise rejects, `.catch()` will handle the error.

const gitAPI = fetch('https://api.github.com/users/nasif1731');//gitAPI will get Promise as return
//console.log(gitAPI);
gitAPI.then((res)=>res.json())//it will get response from JSON
.then(profile=>console.log(profile))
.catch((err)=>console.log(err.message));

//async -> koi function sy pehly lgaty hain un functions m lgaty hain jin 
// m humny asynchronous behaviour incorporate krna ho.
async function getData() {
    try {
        // Fetching GitHub user data
        const response = await fetch('https://api.github.com/users/nasif1731');
        
        // Parsing the response as JSON
        const profile = await response.json();
        
        // Logging the profile data
        console.log(profile);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Calling the function
getData();

localStorage.setItem('user',1234);
let dash = localStorage.getItem('user');
console.log(dash);


localStorage.setItem('gitURL','https://api.github.com/users/nasif1731');
localStorage.removeItem('user');

const users = [
    { name: 'Malaika', age: 21 },
    { name: 'Ahmed', age: 25 },
    { name: 'Ayesha', age: 23 },
    { name: 'Bilal', age: 27 },
    { name: 'Fatima', age: 22 }
];

// Logging the users array
console.log(users);
console.log(JSON.stringify(users));

localStorage.setItem('cloudData',JSON.stringify(users));
console.log(localStorage.getItem('cloudData'));

// sir wants a page 
// whose title is Record passage
//expense source, amount label input, 2 buttons(spend and income).
//debit balance(green), credit balance(red)
//total amount
//and when all the steps happen it should display all the transaction list.



