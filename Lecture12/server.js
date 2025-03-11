// const express = require('express');
// const app = express();

// app.use((req, res, next) => { // ✅ Fixed parameter order
//     console.log(req.method);
//     console.log(req.protocol);
//     console.log(req.get('host'));
//     console.log(req.originalUrl);
//     next();
// });

// // Uncommented Body Parser if needed
// // const bodyParser = require('body-parser');
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // Uncomment if you want an additional middleware log
// // app.use((req,res,next)=>{
// //     console.log("I am in middleware");
// //     next();
// // });

// // app.get('/', (req, res) => {
// //     res.send('<h1>Welcome to hell</h1>'); // Sends HTML content
// // });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

// app.post('/login',(req,res)=>{
//     console.log(req.body);
//     console.log(req.body.email);
//     res.send("User login successfully");
// });


const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => { 
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.get('host'));
    console.log(req.originalUrl);
    next();
});

// Enable body parsing middleware
app.use(express.urlencoded({ extended: false })); // Parses form data (application/x-www-form-urlencoded)
app.use(express.json()); // Parses JSON data

// Route to handle user login
app.post('/login', (req, res) => {
    console.log(req.body); // ✅ Now req.body will be defined
    console.log(req.body.email); // ✅ Can access email if sent in request
    res.send("User login successfully");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
