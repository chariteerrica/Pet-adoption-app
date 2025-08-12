const express = require('express');
const router = express.Router();

const {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
} = require('../controllers/applicationController');

const { protect } = require('../middleware/authMiddleware');

// Routes
router.post('/', protect, createApplication); // Create new application
router.get('/', protect, getAllApplications); // Only admins
router.get('/:id', protect, getApplicationById); // View one application
router.put('/:id', protect, updateApplicationStatus); // Admin updates status

module.exports = router;
