import React from 'react';
import './RestaurantFooter.css';
import phoneIcon from './images/phone icon.jpg';
import backgroundImage from './images/backgroundimage.jpg'; 
import paymentOptions from './images/payment-options.jpg'; 
import googlePlay from './images/google play.png'; // Import Google Play image
import appStore from './images/app store.png'; // Import App Store image

function RestaurantFooter() {
    return (
        <div
            className="restaurant-footer"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="footer-content">
                {/* Left Section */}
                <div className="footer-left">
                    <h3>DeliTaste</h3>
                    <div className="working-schedule">
                        <p>Mon - Sat: 9:00 am - 10:00 pm</p>
                        <p>Sun: 10:00 am - 8:00 pm</p>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="footer-middle">
                    <div className="call-us-icon">
                        <img src={phoneIcon} alt="Phone Icon" />
                    </div>
                    <h3>Call us to make</h3>
                    <h3>an order!</h3>
                    <p>Don’t be shy, we don’t bite :)</p>
                    <p className="phone-number">+1 654 847 52 25</p>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <div className="payment-options">
                        <h3>Payment Options</h3>
                        <img src={paymentOptions} alt="Payment Options" />
                    </div>
                    <div className="download-app">
                        <h3>Download The App</h3>
                        <div className="app-badges">
                            <img src={googlePlay} alt="Google Play" />
                            <img src={appStore} alt="App Store" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© All Rights Reserved. DeliTaste 2020</p>
                <div className="social-icons">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default RestaurantFooter;
