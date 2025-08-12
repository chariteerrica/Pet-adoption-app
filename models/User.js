const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Defines the schema for a User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Must have a name
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], 
    default: 'user'
  },
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

// Hash the password before saving to DB
userSchema.pre('save', async function (next) {
  // Only hash if the password is new or modified
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10); // Create salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next(); // Continue saving
  } catch (err) {
    next(err); // Pass error to Express
  }
});

// Add method to compare plain password with hashed one
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the model
module.exports = mongoose.model('User', userSchema);
