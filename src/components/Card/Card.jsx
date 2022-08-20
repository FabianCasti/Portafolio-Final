import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="Card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span className="heading">{heading}</span>
      <span>{detail}</span>
      
    </div>
  );
};

export default Card;
