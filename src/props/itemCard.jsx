
import React from 'react';
import '../Components/Items/Items.css';

const ItemCard = ({ image, title }) => {
  return (
    <div className="item-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default ItemCard;
