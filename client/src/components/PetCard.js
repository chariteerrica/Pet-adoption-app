import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './styles/StyledButton';

const PetCard = ({ pet }) => {
  const img =
    pet.photoUrl || pet.imageUrl || pet.photo || pet.image || "/placeholder.png";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center max-w-[300px] w-full" style={{ border: '1px solid #e5e7eb' }}>
      <div className="w-full max-w-[250px] h-48 overflow-hidden mx-auto mb-2">
        <img src={img} alt={pet.name || "Pet"} className="w-full h-full object-cover rounded" />
      </div>

      <h2 className="text-lg font-semibold">{pet.name || "Unnamed"}</h2>
      <p className="text-sm text-gray-600">Breed: {pet.breed || pet.type || "Unknown"}</p>
      <p className="text-sm text-gray-600">Age: {pet.age ?? "—"}</p>
      <p className="text-sm text-gray-700">{pet.description || ""}</p>
      <p className="text-sm">Gender: {pet.gender === 'male' ? '♂️' : pet.gender === 'female' ? '♀️' : '—'}</p>

      <StyledButton to={`/apply/${pet._id || pet.id}`} className="mt-4">
        Adopt Me
      </StyledButton>
    </div>
  );
};



export default PetCard;