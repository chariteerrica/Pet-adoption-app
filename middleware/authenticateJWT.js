const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    console.log('Incoming Authorization Header:', req.headers.authorization);
    const authHeader = req.headers.authorization;

  // Check if token is present in the Authorization header
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      // Verify the token using your secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded);
      req.user = {
        _id: decoded.id,
        email: decoded.email,
        role: decoded.role
       }; 
      next(); // Pass control to next middleware/handler
    } catch (err) {
        console.log('JWT verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization token required' });
  }
  console.log('Incoming Authorization Header:', req.headers.authorization);

};

module.exports = authenticateJWT;
