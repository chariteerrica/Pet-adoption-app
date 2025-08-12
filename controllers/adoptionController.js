const Adoption = require('../models/Adoption');
const Pet = require('../models/Pet');

exports.createAdoption = async (req, res) => {
  try {
    const {
      petId,
      fullName,
      phone,
      city,
      state,
      dob,
      reason,
      homeEnvironment,
      otherPets,
      experience,
    } = req.body;

    if (!petId) {
      return res.status(400).json({ message: 'petId is required' });
    }

    // Validate pet exists
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found.' });
    }

    // Create new adoption linked to user
    const adoption = new Adoption({
      petId,
      fullName,
      phone,
      city,
      state,
      dob,
      reason,
      homeEnvironment,
      otherPets,
      experience,
    });

    await adoption.save();

    res.status(201).json({ message: 'Adoption application submitted.', adoption });
  } catch (err) {
    console.error('Error creating adoption:', err);
    res.status(500).json({ error: 'Server error while submitting adoption.' });
  }
};
