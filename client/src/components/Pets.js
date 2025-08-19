import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import PageCard from '../components/PageCard';
import './Pets.css';
import { wrapperStyle, overlayStyle } from './styles/sharedStyles';
import { useNavigate } from 'react-router-dom';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
  async function fetchPets() {
    try {
      const res = await axios.get("/api/pets");  // no token needed
      const data = res.data;

      // make sure we always set an array
      const list = Array.isArray(data) ? data : (Array.isArray(data?.pets) ? data.pets : []);
      console.log("Fetched pets:", list);
      setPets(list);
    } catch (err) {
      console.error("Error fetching pets:", err);
      setPets([]);
    }
  }

  fetchPets();
}, []);


  return (
  <div style={wrapperStyle}>
    <div style={overlayStyle}>
      <div className="pets-container">
        <div className="pets-grid">
          {pets.map((pet, i) => (
            <div key={pet._id || i} className="pet-card">
              <PetCard pet={pet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);



}

export default Pets;