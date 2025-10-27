import React from 'react';
import './HeroSection.css';
import burgerimage from './Images/burger-image.jpg';

function HeroSection() {
  return (
    <div className="hero-section" style={{backgroundImage: `url(${burgerimage})`}}>
      <div className="hero-content">
        <h1>
          We Deliver The <br />
          Taste Of Life
        </h1>
        <p>Get It Delivered Right To Your Door.</p>
        <div className="search-box">
          <input type="text" placeholder="Enter your location" />
          <button>Search Food</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;