const Application = require('../models/Application');

// Create application
const createApplication = async (req, res) => {
  try {
    const newApp = await Application.create({
      userId: req.user._id,
      ...req.body
    });
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all applications (admin only)
const getAllApplications = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admins only' });
  }
  const apps = await Application.find().populate('userId', 'name email');
  res.json(apps);
};

// Get single application
const getApplicationById = async (req, res) => {
  const app = await Application.findById(req.params.id);
  if (!app) return res.status(404).json({ message: 'Not found' });

  if (req.user.role !== 'admin' && app.userId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  res.json(app);
};

// Update application (admin only)
const updateApplicationStatus = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admins only' });
  }

  const app = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(app);
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus
};
