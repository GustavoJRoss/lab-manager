import React, { useState } from "react";
import "./LabCard.css";

const LabCard = ({ laboratorio, onClose }) => {
  const [expandirSoftwares, setExpandirSoftwares] = useState(false);

  if (!laboratorio) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Detalhes do Laboratório</h2>
        <p>
          <strong>Nome:</strong> {laboratorio.nome}
        </p>
        <p>
          <strong>Bloco:</strong> {laboratorio.bloco}
        </p>
        <p>
          <strong>Status:</strong> {laboratorio.status}
        </p>
        <p>
          <strong>Número de PCs:</strong> {laboratorio.numPcs}
        </p>
        <div className="softwaresSection">
          <p>
            <strong>Softwares:</strong>
          </p>
          <button
            className="toggleButton"
            onClick={() => setExpandirSoftwares(!expandirSoftwares)}
          >
            {expandirSoftwares ? "Recolher" : "Expandir"}
          </button>
          {expandirSoftwares && (
            <ul className="softwaresList">
              {laboratorio.softwares.map((software, index) => (
                <li key={index}>{software}</li>
              ))}
            </ul>
          )}
          <button className="addButton">Adicionar Software</button>
        </div>
        <button className="closeButton" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default LabCard;
