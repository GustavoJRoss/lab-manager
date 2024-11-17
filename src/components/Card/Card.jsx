import React from "react";
import "./Card.css";

const Card = ({ title, imagePath, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="cardHeader">
        <h3>{title}</h3>
      </div>
      <div className="cardContent">
        <img src={imagePath} alt={title} className="cardImage" />
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
};

export default Card;
