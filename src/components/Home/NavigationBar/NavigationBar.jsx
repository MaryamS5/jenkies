import React from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoImage from '../NavigationBar/Images/logo-image.jpg';

function NavigationBar() {
    return (
        <nav className="navigation">
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />
                <Link to="/">Zesty Bites</Link>
            </div>
            
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Recipe">Our Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li className="dropdown">
                    <span >Pages &#9662;</span>
                    <div className="dropdown-content">
                        <Link to="/restaurants">Restaurants</Link>
                        <Link to="/restaurant-detail">Restaurant Detail</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/checkout">Checkout</Link>
                        <Link to="/my-profile">My Profile</Link>
                        <Link to="/faqs">FAQs</Link>
                        <Link to="/testimonials">Testimonials</Link>
                        <Link to="/404">404</Link>
                    </div>
                </li>
            </ul>
            
            <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                +1 654 847 52 25
            </div>
            
            <div className="search-cart-signin">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <Link to="/cart" className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <Link to="/signin" className="sign-in">
                    Sign In <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;