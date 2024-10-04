import React from 'react';


const Card = ({ content }) => {
  return (
    <div className="card">
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};

export default Card;
