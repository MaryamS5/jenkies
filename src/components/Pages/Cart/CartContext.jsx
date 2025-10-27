import React, { createContext, useState, useContext } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  
  const removeFromCart = (itemName) => {
    setCartItems(prev => prev.filter(i => i.name !== itemName));
  };

  
  const increaseQuantity = (itemName) => {
    setCartItems(prev =>
      prev.map(i =>
        i.name === itemName ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

 
  const decreaseQuantity = (itemName) => {
    setCartItems(prev =>
      prev.map(i =>
        i.name === itemName
          ? { ...i, quantity: Math.max(i.quantity - 1, 0) }
          : i
      )
    );
  };

  
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };


  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
