import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyAdoptions() {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/adoptions/my', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAdoptions(response.data);
      } catch (err) {
        console.error('Error fetching adoptions', err);
      }
    };

    fetchAdoptions();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Adoption Requests</h2>
      {adoptions.map((a) => (
        <div key={a._id} className="border p-4 rounded shadow">
          <p><strong>Pet:</strong> {a.petId?.name} ({a.petId?.breed})</p>
          <p><strong>Status:</strong> {a.status}</p>
          {a.adoptionDate && (
            <p><strong>Adopted On:</strong> {new Date(a.adoptionDate).toLocaleDateString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyAdoptions;
