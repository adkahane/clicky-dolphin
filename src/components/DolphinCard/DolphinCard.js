import React from "react";
import "./DolphinCard.css";

const DolphinCard = props => (
  <div className="images">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default DolphinCard;
