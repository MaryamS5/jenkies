import React from 'react';
import './OrderSection.css';
import backgroundImage from '../OrderSection/Images/backgroundimage.jpg'; 
import tickIcon from '../OrderSection/Images/tick.jpg'; 
import appStoreIcon from '../OrderSection/Images/app store.png'; 

function OrderSection() {
    return (
        <div className="order-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="order-content">
                <h1 className="main-title">
                    <span>Make Orders With Our</span>
                    <span className="colored-text">Application</span>
                </h1>
                <div className="download-buttons">
                    <a href="#" target="_blank">
                        <img src={appStoreIcon} alt="Download on the App Store" />
                    </a>
                </div>
                <div className="feature">
                    <img className="tick-icon" src={tickIcon} alt="Tick Icon" />
                    <div className="text-container">
                        <h3>Order and pay in a few minutes</h3>
                        <p>Choose food and pay for the order in a couple of clicks online</p>
                        <p>also choose your current location using GPS.</p>
                    </div>
                </div>
                <div className="feature">
                    <img className="tick-icon" src={tickIcon} alt="Tick Icon" />
                    <div className="text-container">
                        <h3>Check Delivery Status</h3>
                        <p>Follow the status of your order in real time and also track the</p>
                        <p>delivery path until you get it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSection;
