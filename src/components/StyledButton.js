// components/StyledButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../styles/sharedStyles';

function StyledButton({ to, children }) {
  return (
    <Link
      to={to}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.backgroundColor = '#005fa3';
        e.target.style.boxShadow = '0 6px 15px rgba(0, 95, 163, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = '#0077cc';
        e.target.style.boxShadow = '0 4px 12px rgba(0, 119, 204, 0.25)';
      }}
    >
      {children}
    </Link>
  );
}

export default StyledButton;
