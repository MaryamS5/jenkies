import React, { useState } from 'react';
import './CouponComponent.css';

const CouponComponent = ({ total, applyDiscount }) => {
    const [coupon, setCoupon] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    const handleApplyCoupon = () => {
        if (discountApplied) {
            alert('You already used the coupon.');
            return;
        }

        if (coupon === 'SAVE20') {
            applyDiscount(20); 
            setDiscountApplied(true);
            alert(' Congratulations! You got 20% off!');
        } else {
            alert('Invalid coupon code.');
        }
    };

    return (
        <div className="coupon-section">
            <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={discountApplied} 
            />
            <button onClick={handleApplyCoupon} disabled={discountApplied}>
                Apply Coupon
            </button>
            {discountApplied && (
                <p style={{ color: 'green' }}>Discount applied successfully!</p>
            )}
        </div>
    );
};

export default CouponComponent;