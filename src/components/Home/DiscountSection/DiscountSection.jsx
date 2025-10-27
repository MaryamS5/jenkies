import React from 'react';
import './DiscountSection.css';
import backgroundImage from '../DiscountSection/Images/Pizza+Dark.jpg';
import { Link } from 'react-router-dom'; 

function DiscountSection() {
    return (
        <div className="discount-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="discount-content">
                <h1 className="title-stacked">
                    MAKE YOUR FIRST<br />
                    ORDER AND GET<br />
                    <span className="discount-text">50% OFF</span>
                </h1>
                <p className="description-1">Get it delivered right to your door.</p>
                <p className="description-2">
                    If you order food delivery from us for the first time then we have a gift -  
                    <span className="discount-text"> 50% discount </span> 
                    for you on the first order. You just need to register and order your favorite food.
                </p>

               
                <Link to="/cart">
                    <button className="order-product-button">Order Product</button>
                </Link>
            </div>
        </div>
    );
}

export default DiscountSection;
