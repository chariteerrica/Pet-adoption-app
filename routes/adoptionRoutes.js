const express = require('express');
const router = express.Router();
const { createAdoption} = require('../controllers/adoptionController');

router.post('/', createAdoption); 



module.exports = router;
