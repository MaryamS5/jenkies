import React from 'react';
import './RestaurantImage.css';
import backgroundImage from '../../RestaurantsDetails/Images/image.jpg';
import dishImage from '../../RestaurantsDetails/Images/dish-image.jpg';
import { Link } from 'react-router-dom';

const RestaurantImage = () => (
  <div>
    <div className="restaurant-detail" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="restaurant-hero-overlay"></div>
      <div className="restaurant-hero-content">
        <h1>Bulgarian Restaurant</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">-</span>
          <Link to="/restaurants">Restaurants</Link>
          <span className="separator">-</span>
          <span className="current">Bulgarian Restaurant</span>
        </div>
      </div>
    </div>
    <div className="restaurant-image">
      <img src={dishImage} alt="Bulgarian Dish" />
    </div>
  </div>
);

export default RestaurantImage;
