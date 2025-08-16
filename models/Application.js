const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  homeType: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  dob: { type: Date, required: true },
  hasYard: { type: Boolean, required: true },
  hasOtherPets: { type: Boolean, required: true },
  petExperience: { type: String, enum: ['beginner', 'intermediate', 'expert'], required: true },
  reasonForAdopting: { type: String, required: true },
  preferredPetType: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' },
  adminNotes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Application', applicationSchema);
