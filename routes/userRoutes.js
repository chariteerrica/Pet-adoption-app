const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

//routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/ping', (req, res) => { //test route
  res.json({ message: 'Backend is connected ✅' });
});


// Protected routes
// router.get('/me', protect, getUserProfile);
// router.get('/', protect, getUserProfile); // Admin only

module.exports = router;
