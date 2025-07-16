import React from 'react';
import './Hero.css';
import burger from '../../assets/hero/hero-2.png';
import priceBadge from '../../assets/price-badge-yellow.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="burger-wrapper">
          <img src={burger} alt="Delicious burger" className="burger-image" />
          <div className="price-badge">
            <img src={priceBadge} alt="Special price" className="badge-image" />
            <div className="price-text">
              <p className="only">ONLY</p>
              <p className="price">$6.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;