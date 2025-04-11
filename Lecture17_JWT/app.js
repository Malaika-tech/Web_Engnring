const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt'); // typo fixed here
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
dotenv.config();
const users = require('./users');
const app = express();
app.use(express.json());

function generateToken(user){
    return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET_KEY, {expires: '1h'})
};

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);

    res.json({
        message: 'Login successful!',
        token: token
    });
});

app.post('/profile',(req,res)=>{
    const authHeader = req.headers['authorization']; // Get Authorization header

    if (!authHeader) {
        return res.status(400).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1]; // Remove "Bearer " part
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // If successful, you can now access decoded.id, decoded.email, etc.
        return res.status(200).json({ message: 'Profile accessed', user: decoded });
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
})
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }));

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = users.find(u => u.email === email);
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Compare password
//     const isPasswordValid = bcrypt.compareSync(password, user.password);
//     if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Save user info in session
//     req.session.userId = user.id;

//     res.json({ message: 'Login successful!' });
// });

// // Server listen (optional if not included yet)
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
