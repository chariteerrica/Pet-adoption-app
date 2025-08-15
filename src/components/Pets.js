import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import PageCard from '../components/PageCard';
import './Pets.css';
import { wrapperStyle, overlayStyle } from '../styles/sharedStyles';
import { useNavigate } from 'react-router-dom';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
  async function fetchPets() {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // 👈 Log token for debugging

      if (!token) {
        console.warn('No token found in localStorage');
        return;
      }
      const backendUrl = process.env.REACT_APP_API_URL;

      const res = await axios.get('${backendUrl/api/pets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched pets:', res.data);
      setPets(res.data);
    } catch (err) {
      console.error('Error fetching pets:', err);
    }
  }

  fetchPets();
}, []);

  return (
    <div style={wrapperStyle}>
      <div style={overlayStyle}>
        <div className="pets-container">
          <div className="pets-grid">
      {pets.map((pet) => (
        <div key={pet._id} className="pet-card">
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
