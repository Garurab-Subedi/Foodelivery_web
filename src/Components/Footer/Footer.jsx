import React from 'react';
import './Footer.css';
import logo from '../../assets/logo/logo.png';
import instagram_icon from '../../assets/footer/instagram.png';
import facebook_icon from '../../assets/footer/facebook.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" height="60px" />
      </div>

      <div className="footer-text">
        <h1>We're Tasty Burger</h1>
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="footer-details">
        <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Address: 123 Burger Street, Food City, FC 12345</p>
        <p>Email: burger12@gmail.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      <div className="payment">
        <h1>Payment Methods</h1>
        <p>We accept all major credit cards, wallets, and cash on delivery.</p>
      </div>

      <div className="social-media-links">
        <h1>Follow Us</h1>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="Instagram" height="30px" />
          </div>
          <div className="footer-icon-container">
            <img src={facebook_icon} alt="Facebook" height="30px" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
