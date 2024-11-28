import React from 'react';
import './Button.css';

const Button = ({ text, onClick, color }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
