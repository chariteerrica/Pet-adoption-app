const Pet = require('../models/Pet');

// GET /api/pets - Get all pets from the local MongoDB
const getAllPets = async (req, res) => {
   try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
};

// (Optional) GET a single pet by ID
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pet' });
  }
};

// (Optional) POST a new pet
const createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create pet' });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet
};
