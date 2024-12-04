import React, { useState } from 'react';
import './CreateLab.css';
import TextField from '../TextField/TextField';
const CreateLab = ({ laboratorio, onClose }) => {
  const [name, setName] = useState('');
  const [local, setLocal] = useState('');
  const [acessible, setAcessible] = useState('');
  const [pcNumbers, setPcNumbers] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    const labData = {
      name,
      local,
      acessible: acessible === 'true', // Converte string para boolean se necessário
      pcNumbers: Number(pcNumbers), // Converte string para número
      status,
      softwares: [],
    };

    try {
      const response = await fetch('http://localhost:8080/labs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(labData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Laboratório criado com sucesso!');
        console.log('Resposta do servidor:', data);

        // Limpar os campos após sucesso
        setName('');
        setLocal('');
        setAcessible('');
        setPcNumbers('');
        setStatus('');
      } else {
        console.error('Erro ao criar laboratório');
        alert(
          'Erro ao criar laboratório. Verifique os dados e tente novamente.',
        );
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar os dados. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Detalhes do Laboratório</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          <div
            className="nameInfo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Nome do Laboratório:</p>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>
          <div
            className="localInfo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Local do Laboratório:</p>
            <TextField
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Digite o local"
            />
          </div>
          <div
            className="acessibleInfo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>É acessível?</p>
            <select
              style={{ borderRadius: '10px', padding: '10px' }}
              value={acessible}
              onChange={(e) => setAcessible(e.target.value)}
            >
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          <div
            className="pcNumbers"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Número de Pcs:</p>
            <input
              style={{ width: '40%' }}
              type="number"
              min="0"
              value={pcNumbers}
              onChange={(e) => setPcNumbers(e.target.value)}
              placeholder="Mínimo"
            />
          </div>
          <div
            className="status"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Status do laboratorio:</p>
            <select
              style={{ borderRadius: '10px', padding: '10px' }}
              value={acessible}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="disponivel">Disponível</option>
              <option value="ocupado">Ocupado</option>
              <option value="em manutenção">Em Manutenção</option>
              <option value="bloqueado">Bloqueado</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <button className="saveButton" onClick={handleSubmit}>
            Criar Laboratório
          </button>
          <button className="closeButton" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLab;
