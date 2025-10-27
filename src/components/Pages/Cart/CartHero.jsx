import React from 'react';
import './CartHero.css';

import backgroundImage from'./Images/your-background-image.jpg';// Replace with your actual cart image

function CartHero() {
    return (
        <div className="cart-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="cart-hero-overlay"></div>
            <div className="cart-hero-content">
                <h1>my Cart</h1>
                <div className="breadcrumb">
                    <a href="/">Home</a>
                    <span className="separator">—</span>
                    <a href="/restaurant-detail">Menu</a>
                    <span className="separator">—</span>
                    <span className="current">Cart</span>
                </div>
            </div>
        </div>
    );
}

export default CartHero;
