import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageCard from '../components/PageCard';
import { wrapperStyle, overlayStyle } from '../styles/sharedStyles';


const MyApplications = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5001/api/adoptions/my-requests', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdoptions(res.data);
      } catch (err) {
        console.error('Failed to fetch applications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptions();
  }, []);

  if (loading) return <p>Loading your applications...</p>;

  return (
    <div style={wrapperStyle}>
      <div style={overlayStyle}>
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">My Adoption Requests</h2>
            {adoptions.length === 0 ? (
            <p>You haven’t submitted any adoption requests yet.</p>
            ) : (
            <ul className="space-y-4">
          {adoptions.map((adoption) => (
            <li
              key={adoption._id}
              className="border p-4 rounded shadow"
            >
              <h3 className="font-semibold">{adoption.pet?.name || 'Unknown Pet'}</h3>
              <p>Status: <strong>{adoption.application?.status || 'Pending'}</strong></p>
              {adoption.application?.reason && (
                <p className="text-sm text-gray-600">Reason: {adoption.application.reason}</p>
              )}
            </li>
          ))}
        </ul>
      )}
        </div>
      </div>   
    </div>
  );
};

export default MyApplications;
