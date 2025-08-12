const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/adoptme');

    await User.deleteMany();

    await User.create([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123', // plain text!
        role: 'admin'
      },
      {
        name: 'Regular User',
        email: 'user@example.com',
        password: 'user123', // plain text!
        role: 'user'
      }
    ]);

    console.log('✅ Users seeded!');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed users:', err);
    process.exit(1);
  }
};

seedUsers();
