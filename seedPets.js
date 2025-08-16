// seedPets.js
const mongoose = require('mongoose');
const Pet = require('./models/Pet');
require('dotenv').config();

const samplePets = [
  {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    location: 'Orlando, FL',
    description: 'Friendly and playful',
    photoUrl: '/images/pets/golden.jpeg'
  },
  {
    name: 'Luna',
    breed: 'Siberian Husky',
    age: 2,
    location: 'Miami, FL',
    description: 'Energetic and loves the snow',
    photoUrl: '/images/pets/husky.jpg'
  },
  {
    name: 'Milo',
    breed: 'Tabby Cat',
    age: 2,
    location: 'Orlando, FL',
    description: 'Enjoys sunbathing and bird-watching.',
    photoUrl: '/images/pets/tabby.jpg'
  },
  {
    name: 'Max',
    breed: 'Beagle',
    age: 5,
    location: 'Tampa, FL',
    description: 'Loves sniffing everything in sight!',
    photoUrl: '/images/pets/beagle.jpg'
  },
  {
    name: 'Mittens',
    breed: 'Tuxedo Cat',
    age: 1,
    location: 'Jacksonville, FL',
    description: 'Cuddly and curious.',
    photoUrl: '/images/pets/tuxedo.jpg'
  },
  {
    name: 'Coco',
    species: 'Cat',
    breed: 'Persian',
    age: 3,
    description: 'Loves naps and sunbeams',
    photoUrl: '/images/pets/persian.jpg'
  },
  {
    name: 'Rocky',
    species: 'Dog',
    breed: 'Boxer',
    age: 5,
    description: 'Playful and loyal',
    photoUrl: '/images/pets/boxer.jpg'
  },
  {
    name: 'Milo',
    species: 'Dog',
    breed: 'Dachshund',
    age: 3,
    description: 'Short legs, big personality',
    photoUrl: '/images/pets/dachshund.jpg'
  },
  {
    name: 'Bella',
    species: 'Cat',
    breed: 'Maine Coon',
    age: 4,
    description: 'Fluffy and chill',
    photoUrl: '/images/pets/mainecoon.jpg'
  }
];


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  await Pet.deleteMany({});
  await Pet.insertMany(samplePets);
  console.log("Sample pets inserted!");
  mongoose.connection.close();
})
.catch(err => console.error("DB error:", err));
