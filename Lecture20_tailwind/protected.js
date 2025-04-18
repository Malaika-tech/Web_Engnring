const express = require('express');
const { authenticateToken, authenticateRole } = require('../auth'); // adjust path if needed
const router = express.Router();

// Example: a protected route (like a profile page)
router.get('/profile', authenticateToken, (req, res) => {
    res.render('profile', { user: req.user }); // assuming you're using EJS and have a profile view
});

// Example: a role-based protected route
router.get('/admin', authenticateToken, authenticateRole('admin'), (req, res) => {
    res.send('Welcome, Admin!');
});

module.exports = router;
