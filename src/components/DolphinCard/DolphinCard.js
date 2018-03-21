import React from "react";
import "./DolphinCard.css";

const DolphinCard = props => (
  <div onClick={() => props.setSelected(props.id)} className="images">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default DolphinCard;
