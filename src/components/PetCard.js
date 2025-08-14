import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './StyledButton';

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center max-w-[300px] w-full">
      {pet.photoUrl && (
      <div className="w-full max-w-[250px] h-48 overflow-hidden mx-auto mb-2">
      <img
      src={pet.photoUrl}
      alt={pet.name}
      className="w-full h-full object-cover rounded"
      />
  </div>
)}

      <h2 className="text-lg font-semibold">{pet.name}</h2>
      <p className="text-sm text-gray-600">Breed: {pet.breed}</p>
      <p className="text-sm text-gray-600">Age: {pet.age}</p>
      <p className="text-sm text-gray-700">{pet.description}</p>
      <p className="text-sm">
        Gender: {pet.gender === 'male' ? '♂️' : '♀️'}
      </p>

      <StyledButton to={`/apply/${pet._id}`} className="mt-4">
        Adopt Me
      </StyledButton>
    </div>
  );
};


export default PetCard;
