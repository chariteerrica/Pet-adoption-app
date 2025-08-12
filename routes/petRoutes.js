const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');
const petController = require('../controllers/petController');

// ✅ Protect the route and use the controller
router.get('/', petController.getAllPets);

module.exports = router;
