import React, { useState } from 'react';
import burger from '../../assets/menu/burger-11.jpg';
import './Fooddetails.css';
import star_icon from "../../assets/shop/star_icon.png";
import star_dull_icon from "../../assets/shop/star_dull_icon.png";

const Fooddetail = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 350;
  const totalPrice = quantity * price;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fooddetails">
      <div className="fooddetails-left">
        <img src={burger} alt="burger" height="500px" />
      </div>

      <div className="fooddetails-right">
        <h1>Chicken Burger</h1>

        <div className="fooddetails-right-star">
          <img src={star_icon} alt="star" height="20px" />
          <img src={star_icon} alt="star" height="20px" />
          <img src={star_icon} alt="star" height="20px" />
          <img src={star_icon} alt="star" height="20px" />
          <img src={star_dull_icon} alt="dull star" height="20px" />
          <p>(130)</p>
        </div>

        <div className="food-price">Price per item: Rs. {price}</div>

        <div className="fooddetails-quantity">
          <button className="qty-btn" onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button className="qty-btn" onClick={increment}>+</button>
        </div>

        <div className="food-total-price">
          <strong>Total: Rs. {totalPrice}</strong>
        </div>

        <div className="fooddetails-description">
          Our Chicken Burger is a delicious mix of crispy chicken, fresh lettuce,
          cheese, and signature sauces. Perfect for your hunger cravings!
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Fooddetail;
