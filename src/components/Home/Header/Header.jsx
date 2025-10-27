import React from 'react';
import './Header.css';
import logo from '../Header/Images/logo.png'; 

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Deli Taste Logo" />
        </div>
        <div className="buy-now">
          <button>Buy Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
