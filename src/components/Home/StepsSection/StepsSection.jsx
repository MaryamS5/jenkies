import React from 'react';
import './StepsSection.css';

function StepsSection() {
    return (
        <div className="steps-section">
            <div className="step">
                <span className="step-number">STEP 1</span>
                <h3>Choose Location</h3>
                <p>Enter your address or choose your current location using app.</p>
            </div>
            <div className="step">
                <span className="step-number">STEP 2</span>
                <h3>Order Favorite Food</h3>
                <p>Choose your favorite food and a payment method.</p>
            </div>
            <div className="step">
                <span className="step-number">STEP 3</span>
                <h3>Fast Delivery</h3>
                <p>Get it delivered right to your door in 1 hour or less.</p>
            </div>
        </div>
    );
}

export default StepsSection;
