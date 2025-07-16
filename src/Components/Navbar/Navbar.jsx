import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav-logo'>
                <img src={logo} alt="" height="50px"/>
            </div>
            
            <div className='menu-icon' onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    <FaTimes className="close-icon" />
                ) : (
                    <FaBars className="hamburger-icon" />
                )}
            </div>

            <div className={`nav-content ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu("home"); closeMobileMenu(); }}>
                        <Link to="/">Home</Link>
                        {menu === "home" ? <hr/> : null}
                    </li>
                    <li onClick={() => { setMenu("Menu"); closeMobileMenu(); }}>
                        <Link to="/menu">Menu</Link>
                        {menu === "Menu" ? <hr/> : null}
                    </li>
                    <li onClick={() => { setMenu("About"); closeMobileMenu(); }}>
                        <Link to="/about">About</Link>
                        {menu === "About" ? <hr/> : null}
                    </li>
                    <li onClick={() => { setMenu("Contact"); closeMobileMenu(); }}>
                        <Link to="/contact">Contact</Link>
                        {menu === "Contact" ? <hr/> : null}
                    </li>
                </ul>
                
                <div className='nav-login-cart'>
                    <Link to="/login" onClick={closeMobileMenu}>
                        <button>
                            <span className="desktop-text">Login</span>
                            <FaUser className="mobile-icon"/>
                        </button>
                    </Link>
                    <Link to="/cart" onClick={closeMobileMenu}>
                        <div className="cart-container">
                            <FaShoppingCart className="cart-icon" />
                            <div className="nav-cart-count">0</div>
                        </div>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default Navbar;