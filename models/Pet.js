// models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  photoUrl: String,
  description: String,
  location: String,
  addedByUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Pet', petSchema);
