const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt'); // typo fixed here
const dotenv = require('dotenv');
dotenv.config();
const users = require('./users');
const app = express();
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Save user info in session
    req.session.userId = user.id;

    res.json({ message: 'Login successful!' });
});

// Server listen (optional if not included yet)
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
