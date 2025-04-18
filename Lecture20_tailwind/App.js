const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = require('./user'); // <--- Updated here

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password, role } = req.body;

    console.log('Request body:', req.body);

    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (!user) return res.status(400).json({ message: "Invalid user or role" });

    const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.JWT_SECRET_KEY, // ✅ match with .env
        { expiresIn: '1h' }
      );
      

    res.json({ message: "Login successful", token });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
