import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
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
                    <li onClick={() => { setMenu("Mens"); closeMobileMenu(); }}>
                        <Link to="/mens">Mens</Link>
                        {menu === "Mens" ? <hr/> : null}
                    </li>
                    <li onClick={() => { setMenu("Womens"); closeMobileMenu(); }}>
                        <Link to="/womens">Womens</Link>
                        {menu === "Womens" ? <hr/> : null}
                    </li>
                    <li onClick={() => { setMenu("Kids"); closeMobileMenu(); }}>
                        <Link to="/kids">Kids</Link>
                        {menu === "Kids" ? <hr/> : null}
                    </li>
                </ul>
                
                <div className='nav-login-cart'>
                    <Link to="/login" onClick={closeMobileMenu}>
                        <button>
                            <span className="desktop-text">Login</span>
                            <FaUser className="mobile-icon" />
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