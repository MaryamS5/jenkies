import React from 'react';
import { Link } from 'react-router-dom'; 
import './CheckoutCard.css';

function CheckoutCard({ subtotal, deliveryFee, total }) {
  return (
    <div className="checkout-card">
      <h2>Checkout</h2>
      <div className="summary-item">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Delivery Fee:</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="summary-item total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      
    
      
    </div>
  );
}

export default CheckoutCard;
