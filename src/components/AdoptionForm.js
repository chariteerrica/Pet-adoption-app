import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import './AdoptionForm.css';  // your styles

function AdoptionForm() {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petId: petId || '',
    fullName: '',
    phone: '',
    city: '',
    state: '',
    dob: '',
    reason: '',
    homeEnvironment: '',
    otherPets: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting form data:', formData);
      await axios.post('http://localhost:5001/api/adoptions', formData);

      toast.success('Application submitted successfully! You will receive confirmation soon.', {
        autoClose: 5000, // 5 seconds
      });

      setFormData({
        petId: '',
        fullName: '',
        phone: '',
        city: '',
        state: '',
        dob: '',
        reason: '',
        homeEnvironment: '',
        otherPets: '',
        experience: '',
      });

      setTimeout(() => {
        navigate('/');
      }, 5000);

    } catch (err) {
      console.error('Adoption submission error:', err.response || err);
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="adoption-wrapper">
      <div className="adoption-overlay">
        <h2 className="adoption-title">Adoption Application</h2>
        <form onSubmit={handleSubmit} className="adoption-form">
          {/* Text Inputs */}
          {[
            ['petId', 'Pet ID', 'Enter the pet ID'],
            ['fullName', 'Full Name', 'Enter your full name'],
            ['phone', 'Phone Number', 'e.g. 555-123-4567'],
            ['city', 'City', 'Enter your city'],
            ['state', 'State', 'Enter your state'],
            ['dob', 'Date of Birth', 'YYYY-MM-DD'],
          ].map(([name, label, placeholder]) => (
            <div key={name} className="form-group">
              <label className="adoption-label">{label}</label>
              <input
                type={name === 'dob' ? 'date' : 'text'}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="adoption-input"
                required
              />
            </div>
          ))}

          {/* Textareas */}
          {[
            ['reason', 'Why do you want to adopt this pet?', 3],
            ['homeEnvironment', 'Describe your home environment', 3],
            ['otherPets', 'Do you have other pets?', 2],
            ['experience', 'Do you have experience with animals?', 2],
          ].map(([name, label, rows]) => (
            <div key={name} className="form-group">
              <label className="adoption-label">{label}</label>
              <textarea
                name={name}
                rows={rows}
                value={formData[name]}
                onChange={handleChange}
                placeholder="Your answer..."
                className="adoption-textarea"
                required
              />
            </div>
          ))}

          <button type="submit" className="adoption-button">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
