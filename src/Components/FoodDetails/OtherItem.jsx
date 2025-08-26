import React from 'react'
import './OtherItem.css'
import burger from '../../assets/menu/burger-11.jpg';
import cart from '../../assets/cart_icon.png';

const OtherItem = () => {
  return (
    <div className="foodetails-other">
        <h1>You might aslo like</h1>
        <div className="other-items">
            <div className="other-items-card">
                <img className="others-items-img" src={burger} alt="" height="90px"/>
                <h2>Chicken Burger</h2>
                <p>Chicken, lettuce, cheese, and signature sauces</p>
                <div className="other-item-addcart">
                  <h1>Rs 250</h1>
                  <div className="other-item-cart">
                   <img src={cart} alt=""  height="20px"/>
                    <span>Add to Cart</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherItem