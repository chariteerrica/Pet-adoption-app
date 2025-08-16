// controllers/petController.js
const Pet = require("../models/Pet");

/**
 * GET /api/pets
 * Fetch all pets from MongoDB
 */
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Failed to fetch pets" });
  }
};

/**
 * GET /api/pets/:id
 * Fetch a single pet by ID
 */
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    console.error("Error fetching pet by ID:", error);
    res.status(500).json({ error: "Failed to fetch pet" });
  }
};

/**
 * POST /api/pets
 * Create a new pet
 */
const createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error("Error creating pet:", error);
    res.status(500).json({ error: "Failed to create pet" });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet
};
