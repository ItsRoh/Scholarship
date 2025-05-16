// The JWT middleware is needed to protect your backend routes and identify the logged-in user securely.

// Here’s why it's essential in your case:

// 🔒 1. Protect Access to Private Routes
// You don’t want just anyone calling the /api/profile endpoint and modifying someone’s profile.

// ❌ Without JWT middleware:
// Anyone can make a POST request to /api/profile and send fake profile data.

// ✅ With JWT middleware:
// Only users who have a valid token (issued on login) can access or update their own profile.
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
