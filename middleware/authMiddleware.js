// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = "gaur@vs@rdana"

const authenticate = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: data.userId });
        req.user = user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
};

module.exports = { authenticate };
