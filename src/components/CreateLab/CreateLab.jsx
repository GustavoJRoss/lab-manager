import React, { useState } from "react";
import "./CreateLab.css";
import TextField from "../TextField/TextField";
const CreateLab = ({ laboratorio, onClose }) => {
  const [name, setName] = useState("");
  const [local, setLocal] = useState("");
  const [acessible, setAcessible] = useState("");
  const [pcNumbers, setPcNumbers] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Detalhes do Laboratório</h2>
        <div
          className="nameInfo"
          style={{ display: "flex", alignItems: "center" }}
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
          style={{ display: "flex", alignItems: "center" }}
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
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>É acessível?</p>
          <TextField
            value={acessible}
            onChange={(e) => setAcessible(e.target.value)}
            placeholder="Digite seu é acessivel"
          />
        </div>
        <div
          className="pcNumbers"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>Número de Pcs:</p>
          <TextField
            value={pcNumbers}
            onChange={(e) => setPcNumbers(e.target.value)}
            placeholder="Digite o numero de Pcs"
          />
        </div>
        <div
          className="status"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>Status do laboratorio:</p>
          <TextField
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Digite o Status"
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
