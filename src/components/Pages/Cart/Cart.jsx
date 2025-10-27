import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import CouponComponent from "./CouponComponent/CouponComponent";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import { FaTrash } from "react-icons/fa";

import CartHero from "./CartHero";
import CartHeroFooter from "./CartHeroFooter"; 

import "./Cart.css";

const DELIVERY_FEE = 5.0;

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    clearCart,
  } = useContext(CartContext);

  const [discountPercent, setDiscountPercent] = useState(0);
  const navigate = useNavigate();

  const applyDiscount = (percent) => {
    setDiscountPercent(percent);
  };

  const subtotal = getTotalPrice();
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount + DELIVERY_FEE;

  return (
    <>
      
      <CartHero />

      {/* Main Cart content */}
      <div className="cart-container">
        <h1 className="cart-heading">my Cart</h1>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.name)}>+</button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.name)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <CouponComponent total={subtotal} applyDiscount={applyDiscount} />

            <CheckoutCard
              subtotal={subtotal}
              deliveryFee={DELIVERY_FEE}
              total={total}
            />

            <div className="cart-summary">
              <button
                className="checkout-button"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      
      <CartHeroFooter />
    </>
  );
};

export default Cart;
