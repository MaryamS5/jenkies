

import React from 'react';
import './MyProfile.css';

const MyProfile = () => {
  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      <div className="order-card">
        <div className="order-header">
          <span><strong>Date:</strong> May 22, 20</span>
          <span><strong>Delivery Address:</strong> 27 Division St, New York, NY 10002</span>
          <span><strong>Amount:</strong> $130.57</span>
          <span className="status preparing">Preparing</span>
        </div>

        <div className="order-items">
          <div>Shrimp and oyster soup x2 <span>$130.79</span></div>
          <div>Rib-eye steaks x2 <span>$31.38</span></div>
          <div>Greek salad x1 <span>$34.19</span></div>
        </div>

        <div className="payment-info">
          <strong>Payment Method:</strong> Credit Card: ****5478
        </div>
      </div>

     
      {[1, 2, 3].map((i) => (
        <div className="order-card" key={i}>
          <div className="order-header">
            <span><strong>Date:</strong> May 22, 20</span>
            <span><strong>Delivery Address:</strong> 27 Division St, New York, NY 10002</span>
            <span><strong>Amount:</strong> $130.57</span>
            <span className="status delivered">Delivered</span>
          </div>
        </div>
      ))}

     
      <div className="help-section">
        <h3>Need Help?</h3>
        <p>If you have more questions, please let us know. We will answer as soon as possible.</p>
        <button className="contact-btn">Contact Us</button>
      </div>

     
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Don’t miss promotions and discounts.</p>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default MyProfile;


