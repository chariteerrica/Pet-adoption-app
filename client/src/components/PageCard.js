import React from 'react';
import './PageCard.css'; 

function PageCard({ children, className = '' }) {
  return (
    <div className="pagecard-overlay">
      <div className={`page-card ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default PageCard;
