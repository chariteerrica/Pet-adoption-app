const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  dob: { type: Date, required: true },
  reason: { type: String, required: true },
  homeEnvironment: { type: String, required: true },
  otherPets: { type: String, required: true },
  experience: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Adoption', adoptionSchema);
