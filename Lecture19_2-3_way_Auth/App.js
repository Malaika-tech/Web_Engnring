const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json()); // You missed the parentheses here

// Sample in-memory user data (for testing)
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'editor', password: 'editor123', role: 'editor' }
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return res.status(400).json({ message: "Invalid user" });

    // Sign JWT
    const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // correct spelling is expiresIn, not expireJWT
    );

    res.json({ message: "Login successful", token });
});

// Start server
app.listen(3000, () => console.log("Server is running on port 3000"));
