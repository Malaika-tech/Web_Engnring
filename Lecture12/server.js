const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log("I am in middleware");
    next();
});
app.get('/', (req, res) => {
    res.send('<h1>Welcome to hell</h1>'); // Sends HTML content
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("User login successfully");
});


