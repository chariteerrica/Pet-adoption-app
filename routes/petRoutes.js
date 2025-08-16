// routes/petRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllPets,
  getPetById,
  createPet,
} = require("../controllers/petController");

// Routes
router.get("/", getAllPets);   // GET all pets
router.get("/:id", getPetById); // GET pet by ID
router.post("/", createPet);   // POST new pet

module.exports = router;
