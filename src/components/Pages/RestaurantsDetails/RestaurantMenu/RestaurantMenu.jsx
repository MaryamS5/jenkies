import React from 'react';
import './RestaurantMenu.css';

const RestaurantMenu = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  dishes,
  addToCart
}) => (
  <div>
    <div className="category-buttons">
      {categories.map(category => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
    <div className="dishes-container">
      {(selectedCategory ? dishes[selectedCategory] : dishes['Meat']).map((dish, index) => (
        <div className="dish" key={index}>
          <img src={dish.image} alt={dish.name} />
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <span className="price">${dish.price}</span>
          <button className="add-to-cart" onClick={() => addToCart(dish)}>
  Add to Cart
</button>


        </div>
      ))}
    </div>
  </div>
);

export default RestaurantMenu;
