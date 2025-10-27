import React from 'react';
import './RestaurantCard.css';
import { FaArrowRight } from 'react-icons/fa';


import restaurant1Image from '../RestaurantCard/imageessss/restaurant1Image.jpg';
import restaurant2Image from '../RestaurantCard/imageessss/restaurant2Image.jpg';
import restaurant3Image from '../RestaurantCard/imageessss/restaurant3Image.jpg';
import restaurant4Image from '../RestaurantCard/imageessss/restaurant4Image.jpg';
import restaurant5Image from '../RestaurantCard/imageessss/restaurant5Image.jpg';
import restaurant6Image from '../RestaurantCard/imageessss/restaurant6Image.jpg';
import restaurant7Image from '../RestaurantCard/imageessss/restaurant7Image.jpg';

function RestaurantCard({ restaurant }) {
    let imageSource;

    if (restaurant.name === 'Bulgarian Restaurant') {
        imageSource = restaurant1Image;
    } else if (restaurant.name === 'Beer Power') {
        imageSource = restaurant2Image;
    } else if (restaurant.name === 'Hot Pastry Cafe') {
        imageSource = restaurant3Image;
    } else if (restaurant.name === 'Sushi Taste') {
        imageSource = restaurant4Image;
    } else if (restaurant.name === 'The Urban Fork') {
        imageSource = restaurant5Image;
    } else if (restaurant.name === 'Pizza Galaxy') {
        imageSource = restaurant6Image;
    } else if (restaurant.name === 'Royal Biryani House') {
        imageSource = restaurant7Image;
    } else {
        imageSource = restaurant.image; 
    }

    return (
        <div className="restaurant-card">
            <div className="restaurant-image-container">
                <img src={imageSource} alt={restaurant.name} className="restaurant-image" />
            </div>
            <div className="restaurant-details">
                <div className="restaurant-name-rating">
                    <h3>{restaurant.name}</h3>
                    <div className="restaurant-rating">★★★★★</div>
                </div>
                <div className="restaurant-description">{restaurant.description}</div>
                <hr />
                <div className="restaurant-info">
                    <span className="restaurant-type">{restaurant.type}</span>
                    <a href="/restaurant-detail" className="view-menu-button">
                        View Menu <FaArrowRight />
                    </a>
                    <div className="additional-info">{restaurant.type}</div> 
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;
