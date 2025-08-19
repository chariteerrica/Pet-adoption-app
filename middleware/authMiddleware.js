/*const protect = async (req, res, next) => {
  console.log('Auth header received:', req.headers.authorization);

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Received token:', token); // Add this log

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      req.user = { id: user._id.toString(), role: user.role };
      console.log('User authorized:', req.user); // Add this log
      next();
    } catch (err) {
      console.error('Protect middleware error:', err);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('No token found in headers'); // Add this log
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
};

module.exports = { protect };
*/
