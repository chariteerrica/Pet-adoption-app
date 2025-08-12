const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const petRoutes = require('./routes/petRoutes');

require('dotenv').config();

const app = express();

// ✅ Proper CORS config
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions)); // MUST be before all routes

app.use(express.json()); // To parse JSON bodies

// ✅ If you’re manually setting headers, do it after CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// ✅ Routes
app.use('/api/pets', require('./routes/petRoutes'));
app.use('/api/adoptions', require('./routes/adoptionRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// ✅ DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5001, () => {
      console.log('Server running on port 5001');
    });
  });
