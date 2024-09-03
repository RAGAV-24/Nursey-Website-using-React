// src/ImageWithDetails.js
import React, { useState } from 'react';
import './ImageWithDetails.css';

const ImageWithDetails = ({ src, alt, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="image-container" 
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={src} alt={alt} className="image" />
      {showDetails && (
        <div className="details">
          {details}
        </div>
      )}
    </div>
  );
};

export default ImageWithDetails;
