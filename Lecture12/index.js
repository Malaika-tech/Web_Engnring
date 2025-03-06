// console.log("shukr h load ho gya");

// const { add } = require("./add");
// const { mul } = require("./multiply");
// const { subt } = require("./sub");
// const { divi } = require("./divide");

// console.log(add(3, 4));  // 7
// console.log(subt(4, 3)); // 1
// console.log(mul(4, 3));  // 12
// console.log(divi(4, 3)); // 1.333...

// const file = require("fs");

// // Writing to file correctly
// file.writeFile("./data.txt", "My name is Malaika", (err) => {
//   if (err) {
//     console.log("Error writing file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });


// const jsonData = require('./data.json');
// console.log(jsonData);

// const file =require('fs').promises

// async function totalSalary(){
//     let data=await file.readFile('data.json','utf-8');
//     data=json.parse(data);

// }
// console.log(totalSalary());

// const file = require('fs').promises;

// async function totalSalary() {
//     try {
//         let data = await file.readFile('data.json', 'utf-8');
//         data = JSON.parse(data);

//         // Assign random salaries between 40,000 and 80,000
//         data = data.map(person => ({
//             name: person.name,
//             salary: Math.floor(Math.random() * (80000 - 40000 + 1)) + 40000
//         }));

//         // Calculate total salary
//         const total = data.reduce((sum, person) => sum + person.salary, 0);

//         console.log("Salaries:", data);
//         console.log("Total Salary:", total);
        
//         return total;
//     } catch (err) {
//         console.error("Error reading file:", err);
//     }
// }

// totalSalary();

// const http = require ('http'); // Use 'http' instead of 'file'

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plan' }); // Fixed header
//     res.end('<h1>Welcome to hell</h1>'); // Wrapped in <h1> for better display
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

