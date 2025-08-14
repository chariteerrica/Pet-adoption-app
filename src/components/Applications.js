import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Applications = () => {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5001/api/adoptions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdoptions(res.data);
      } catch (err) {
        console.error('Error fetching applications', err);
      }
    };
    fetchAll();
  }, []);

  const handleDecision = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5001/api/adoptions/${id}`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // update UI
      setAdoptions((prev) =>
        prev.map((a) => (a._id === id ? { ...a, application: { ...a.application, status } } : a))
      );
    } catch (err) {
      console.error('Error updating status', err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Adoption Applications</h2>
      {adoptions.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {adoptions.map((adoption) => (
            <li
              key={adoption._id}
              className="border p-4 rounded shadow"
            >
              <h3 className="font-semibold">{adoption.pet?.name || 'Unknown Pet'}</h3>
              <p>Applicant: {adoption.user?.name || 'Unknown'}</p>
              <p>Status: <strong>{adoption.application?.status || 'Pending'}</strong></p>
              <p className="text-sm text-gray-600">Reason: {adoption.application?.reason}</p>

              {adoption.application?.status === 'Pending' && (
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleDecision(adoption._id, 'Approved')}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecision(adoption._id, 'Rejected')}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Applications;
