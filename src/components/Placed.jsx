import React from 'react';
import '../assets/styles/Congratulations.css'; 

const Congratulations = () => {
  return (
    <div className="congratulations-container">
      <span className="confetti-emoji">🎉</span>
      <h1 className="congratulations-text">Congratulations, your order is placed!</h1>
    </div>
  );
};

export default Congratulations;
