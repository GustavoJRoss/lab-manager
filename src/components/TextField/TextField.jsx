import React from 'react';
import './TextField.css';

const TextField = ({ value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className="textFieldContainer">
      <input
        className="textFieldInput"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
