import React from 'react';
import './Hero.css';
import burger from '../../assets/hero/hero-2.png';
import priceBadge from '../../assets/price-badge-yellow.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
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
    <div className="hero-right">
    <span className="new-label">NEW<br/>BURGER</span>
    <h1>WITH ONION</h1>
    <p className="description">
      Fengjai primis ligula risus auctor laoreet augue egestas mauris
      viverra tortor in laculis pretium at magna mauris ipsum primis
      rhoncus fengjai
    </p>
    <button className="order-button">ORDER NOW</button>
  </div>
    </div>
  );
};

export default Hero;