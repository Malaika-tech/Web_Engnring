const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    // Check if the header is present and in the format "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden (invalid token)

        req.user = user; // Attach decoded user to request
        next(); // Move to next middleware/route
    });
}

// Middleware to authorize user role(s)
function authenticateRole(...allowedRoles) {
    return (req, res, next) => {
        // If no user or role present on request, reject
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized - No user or role found" });
        }

        // Check if user's role is allowed
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden - You do not have access" });
        }

        next(); // User is authorized
    };
}

module.exports = { authenticateToken, authenticateRole };
