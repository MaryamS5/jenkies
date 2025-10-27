import React from 'react';

import RestaurantHero from './RestaurantHero/RestaurantHero';
import RestaurantSearch from './RestaurantSearch/RestaurantSearch';
import RestaurantList from './RestaurantList/RestaurantList';
import FooterSection from '../../Home/FooterSection/FooterSection';
import './Restaurants.css';


const restaurants = [
  {
    id: 1,
    name: 'Vegetarian Fresh Life',
    image: '/images/restaurant1.jpg',
    description: 'Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...',
    type: 'Restaurant',
    open: true,
  },
  {
    id: 2,
    name: 'Beer Power',
    image: '/images/restaurant2.jpg',
    description: 'Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...',
    type: 'Pub',
    open: true,
  },
];

function Restaurant() {
  return (
    <div className="restaurant-page">
      <RestaurantHero />
      <div className="restaurant-content">
        <RestaurantSearch />
        <RestaurantList restaurants={restaurants} />
      </div>
      <FooterSection/>
    </div>
  );
}

export default Restaurant;
