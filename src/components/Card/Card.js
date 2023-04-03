import React from "react";

const Card = ({ content }) => {
  return (
    <div className="card">
      <div className="card-body">{content}</div>
    </div>
  );
};

export default Card;
