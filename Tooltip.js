import React, { useState } from 'react';
import './App.css'


const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
// function for when mouse is up on button
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
// function for when leave the button by Mouse
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
