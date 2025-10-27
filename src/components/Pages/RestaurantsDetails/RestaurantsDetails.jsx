import React, { useState } from 'react';
import './RestaurantsDetails.css';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { useCart } from '../Cart/CartContext';
import '../Cart/Cart.css';
import ribeye from '../RestaurantsDetails/imagess/ribeye.jpg';
import sirloin from '../RestaurantsDetails/imagess/sirloin.jpg';
import tbone from './imagess//tbone.jpg';
import filet from './imagess//filet.jpg';
import beefribs from './imagess//beefribs.jpg';
import lambchops from './imagess//lambchops.jpg';
import porktenderloin from './imagess//porktenderloin.jpg';
import bbqchicken from './imagess//bbqchicken.jpg';
import margherita from './imagess//margherita.jpg';
import pepperoni from './imagess//pepperoni.jpg';
import vegetarian from './imagess//vegetarian.jpg';
import bbqchickenpizza from './imagess/bbqchickenpizza.jpg';
import hawaiian from './imagess/hawaiian.jpg';
import meatlovers from './imagess/meatlovers.jpg';
import supreme from './imagess/supreme.jpg';
import mushroom from './imagess/mushroom.jpg';
import burger from './imagess/burger.jpg';
import fries from './imagess/fries.jpg';
import nuggets from './imagess/nuggets.jpg';
import hotdog from './imagess/hotdog.jpg';
import onionrings from './imagess/onionrings.jpg';
import taco from './imagess/taco.jpg';
import burrito from './imagess/burrito.jpg';
import quesadilla from './imagess/quesadilla.jpg';
import salmonroll from './imagess/salmonroll.jpg';
import tunaroll from './imagess/tunaroll.jpg';
import californiaroll from './imagess/californiaroll.jpg';
import dragonroll from './imagess/dragonroll.jpg';
import spicytunaroll from './imagess/spicytunaroll.jpg';
import vegetableroll from './imagess/vegetableroll.jpg';
import shrimptempuraroll from './imagess/shrimptempuraroll.jpg';
import rainbowroll from './imagess/rainbowroll.jpg';
import vegetablestirfry from './imagess/vegetablestirfry.jpg';
import lentilsoup from './imagess/lentilsoup.jpg';
import spinachsalad from './imagess//spinachsalad.jpg';
import veggieburger from './imagess/veggieburger.jpg';
import mushroompasta from './imagess/mushroompasta.jpg';
import blackbeantacos from './imagess/blackbeantacos.jpg';
import grilledeggplant from './imagess/grilledeggplant.jpg';
import vegetablecurry from './imagess/vegetablecurry.jpg';
import FooterSection from '../../Home/FooterSection/FooterSection';

import RestaurantImage from '../RestaurantsDetails/RestaurantImage/RestaurantImage';
import RestaurantMenu from '../RestaurantsDetails/RestaurantMenu/RestaurantMenu';
import RestaurantFeedback from '../RestaurantsDetails/RestaurantFeedback/RestaurantFeedback';


const RestaurantDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'Carlos Bolitti',
      date: 'May 18, 2020',
      rating: 5,
      comment: 'Very cool team. They work quickly and smoothly. They delivered food on time, the dishes were still hot and the drinks were cold. Good service I will recommend it to everyone.',
    },
    {
        id: 2,
        name: 'Lili Martin',
        date: 'May 14, 2020',
        rating: 5,
        comment: 'I ordered food from two different restaurants at the same time which are far from each other but the guys did very well and delivered the food on time hot and fresh. Everything was as tasty and beautiful as in the restaurant. Food has not lost its beautiful appearance.',
    },
    {
        id: 3,
        name: 'Ali Asgher',
        date: 'April 03, 2024',
        rating: 5,
        comment: 'Great experience with DeliTaste. The food was delivered on time and it was delicious.',
    },
  ]);
  const [openFeedbackId, setOpenFeedbackId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenFeedbackId(prev => (prev === id ? null : id));
  };
  const categories = ['Meat', 'Pizza', 'Fastfood', 'Sushi', 'Vegetarian Food'];
  const dishes = {
    Meat: [
      { name: 'Rib-Eye Steaks', description: 'Few things are better than a properly grilled steak.', price: 15.69, image: ribeye },
      { name: 'Top Sirloin Steaks', description: 'Another great steak option.', price: 25.39, image: sirloin },
      { name: 'T-Bone Steaks', description: 'Classic T-Bone steak.', price: 18.99, image: tbone },
      { name: 'Filet Mignon', description: 'Tender and delicious.', price: 22.50, image: filet },
      { name: 'Beef Ribs', description: 'Smoked beef ribs.', price: 17.29, image: beefribs },
      { name: 'Lamb Chops', description: 'Juicy lamb chops.', price: 28.00, image: lambchops },
      { name: 'Pork Tenderloin', description: 'Pork tenderloin with herbs.', price: 16.49, image: porktenderloin },
      { name: 'BBQ Chicken', description: 'Grilled BBQ chicken.', price: 14.75, image: bbqchicken },
  ],
  Pizza: [
      { name: 'Margherita', description: 'Classic tomato and mozzarella pizza.', price: 12.99, image: margherita },
      { name: 'Pepperoni', description: 'Pizza with pepperoni slices.', price: 14.50, image: pepperoni },
      { name: 'Vegetarian', description: 'Loaded with fresh vegetables.', price: 13.75, image: vegetarian },
      { name: 'BBQ Chicken', description: 'Chicken with BBQ sauce.', price: 15.29, image: bbqchickenpizza },
      { name: 'Hawaiian', description: 'Ham and pineapple.', price: 14.00, image: hawaiian },
      { name: 'Meat Lovers', description: 'Lots of meat toppings.', price: 16.99, image: meatlovers },
      { name: 'Supreme', description: 'Combination of toppings.', price: 15.50, image: supreme },
      { name: 'Mushroom', description: 'Earthy mushroom flavor.', price: 13.25, image: mushroom },
  ],
  Fastfood: [
      { name: 'Burger', description: 'Classic beef burger.', price: 8.99, image: burger },
      { name: 'Fries', description: 'Crispy golden fries.', price: 3.50, image: fries },
      { name: 'Chicken Nuggets', description: 'Bite-sized chicken.', price: 6.75, image: nuggets },
      { name: 'Hot Dog', description: 'Simple and tasty.', price: 4.25, image: hotdog },
      { name: 'Onion Rings', description: 'Crunchy onion rings.', price: 5.50, image: onionrings },
      { name: 'Taco', description: 'Beef taco.', price: 4.75, image: taco },
      { name: 'Burrito', description: 'Loaded burrito.', price: 7.25, image: burrito },
      { name: 'Quesadilla', description: 'Cheesy quesadilla.', price: 6.00, image: quesadilla },
  ],
  Sushi: [
      { name: 'Salmon Roll', description: 'Fresh salmon sushi.', price: 9.50, image: salmonroll },
      { name: 'Tuna Roll', description: 'Tuna with seaweed.', price: 10.25, image: tunaroll },
      { name: 'California Roll', description: 'Crab, avocado and cucumber.', price: 8.00, image: californiaroll },
      { name: 'Dragon Roll', description: 'Eel and avocado roll.', price: 12.50, image: dragonroll },
      { name: 'Spicy Tuna Roll', description: 'Spicy tuna with seaweed.', price: 11.00, image: spicytunaroll },
      { name: 'Vegetable Roll', description: 'Assorted veggies.', price: 7.50, image: vegetableroll },
      { name: 'Shrimp Tempura Roll', description: 'Shrimp tempura with seaweed.', price: 11.75, image: shrimptempuraroll },
      { name: 'Rainbow Roll', description: 'Variety of fish.', price: 13.00, image: rainbowroll },
  ],
  'Vegetarian Food': [
      { name: 'Vegetable Stir-Fry', description: 'Mixed vegetables stir-fried.', price: 11.25, image: vegetablestirfry },
      { name: 'Lentil Soup', description: 'Hearty lentil soup.', price: 8.50, image: lentilsoup },
      { name: 'Spinach Salad', description: 'Fresh spinach with toppings.', price: 9.75, image: spinachsalad },
      { name: 'Veggie Burger', description: 'Plant-based burger.', price: 10.00, image: veggieburger },
      { name: 'Mushroom Pasta', description: 'Pasta with mushrooms.', price: 12.00, image: mushroompasta },
      { name: 'Black Bean Tacos', description: 'Black bean taco with cheese.', price: 9.25, image: blackbeantacos },
      { name: 'Grilled Eggplant', description: 'Grilled eggplant with herbs.', price: 10.75, image: grilledeggplant },
      { name: 'Vegetable Curry', description: 'Assorted veggie curry.', price: 11.50, image: vegetablecurry },
  ],

  
  };

  const handleRatingClick = (selectedRating) => setRating(selectedRating);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now(),
      name,
      date: new Date().toLocaleDateString(),
      rating,
      comment,
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setName('');
    setEmail('');
    setComment('');
    setRating(0);
  };

  const handleDelete = (id) => setFeedbacks((prev) => prev.filter((f) => f.id !== id));

  return (
    <div>
      <RestaurantImage />
      <div className="restaurant-info">
        <div className="details-and-reviews">
          <div className="details">
            <span><FaRegCalendarAlt /> Monday - Sunday</span>
            <span><FaRegClock /> 9:00am - 11:00pm</span>
          </div>
          <div className="reviews">
            <span>{feedbacks.length} Reviews</span>
            {[...Array(5)].map((_, i) => <AiOutlineStar key={i} />)}
          </div>
        </div>
        <hr className="separator-line" />
        <div className="description">
          <p>Exercitation pariatur ipsum magna occaecat quis eiusmod magna. Non nulla commodo laborum magna id.</p>
        </div>
        <div className="amazing-taste">Amazing taste</div>
        <div className="menu">Menu</div>
        <RestaurantMenu
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          dishes={dishes}
          addToCart={addToCart}
        />
        <Link to="/cart" className="view-cart-button">View Cart</Link>
        <RestaurantFeedback
          feedbacks={feedbacks}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          comment={comment}
          setComment={setComment}
          rating={rating}
          setRating={setRating}
          handleRatingClick={handleRatingClick}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          openFeedbackId={openFeedbackId}       
  toggleDropdown={toggleDropdown}
        />
      </div>
     <FooterSection/>
    </div>
  );
};

export default RestaurantDetail;
