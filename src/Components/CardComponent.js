import React from "react";
import "./CardComponent.css";

const CardComponent = ({ image, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default CardComponent;
