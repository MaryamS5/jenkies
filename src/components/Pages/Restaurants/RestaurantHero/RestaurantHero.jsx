import React from 'react';
import './RestaurantHero.css';
import backgroundImage from '../RestaurantHero/imagesss/food-background.jpg'; 

function RestaurantHero() {
  return (
    <div className="restaurant-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="restaurant-hero-overlay"></div>
      <div className="restaurant-hero-content">
        <h1>Restaurants And Cafes</h1>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="separator">—</span>
          <span className="current">Restaurants and cafes</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantHero;
