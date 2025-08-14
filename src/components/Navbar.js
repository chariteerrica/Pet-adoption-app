// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo"><Link to="/">Pet Adopter</Link></h1>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/pets" onClick={() => setIsOpen(false)}>Available Pets</Link></li>
          <li><Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
