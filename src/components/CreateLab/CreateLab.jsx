import React, { useState } from 'react';
import './CreateLab.css';
import TextField from '../TextField/TextField';
const CreateLab = ({ laboratorio, onClose }) => {
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Detalhes do Laboratório</h2>
        <div
          className="nameInfo"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <p>Nome do Laboratório:</p>
          <TextField
            value={name}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
        </div>
        <button className="closeButton" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CreateLab;
