import React from 'react';
import './Specialists.css'; // Ensure this CSS file is linked correctly
import doctorImage from '../doct1.png'; // Make sure the path to your image is correct


const SpecialistCard = () => {
  return (
    <div className="specialist-card">
      <div className="specialist-img-wrapper">
        <img src={doctorImage} alt="Dr. Ahmad Khan" className="specialist-image"/>
      </div>
    </div>
  );
};

export default SpecialistCard;
