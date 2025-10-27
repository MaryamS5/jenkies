import React, { useState } from 'react';
import './PopularDishesSection.css';
import ribEyeSteak from './Images/rib-eye-steak.jpg';
import topSirloinSteak from './Images/top-sirloin-steak.jpg';
import tBoneSteak from './Images/t-bone-steak.jpg';
import stripSteak from './Images/strip-steak.jpg';
import pizza1 from './Images/pizza1.jpg';
import pizza2 from './Images/pizza2.jpg';
import pizza3 from './Images/pizza3.jpg';
import pizza4 from './Images/pizza 4.jpg';
import burger1 from './Images/burger 1.jpg';
import burger2 from './Images/burger 2.jpg';
import burger3 from './Images/burger3.jpg';
import burger4 from './Images/burger 4.jpg';
import sushi1 from './Images/sushi1.jpg';
import sushi2 from './Images/sushi2.jpg';
import sushi3 from './Images/sushi3.jpg';
import sushi4 from './Images/t-bone-steak.jpg';
import veggie1 from './Images/veg1.webp';
import veggie2 from './Images/veg2.jpg';
import veggie3 from './Images/veg2.webp';
import veggie4 from './Images/veg4.jpg';

function PopularDishesSection() {
    const [category, setCategory] = useState('Meat');

    const dishes = {
        Meat: [
            { name: 'Rib-Eye Steaks', image: ribEyeSteak, price: '$15.69', description: 'Juicy and flavorful steak with rich marbling, perfect for grilling..' },
            { name: 'Top Sirloin Steaks', image: topSirloinSteak, price: '$25.39', description: 'Lean and tender cut with a bold beefy flavor, great for pan-searing.' },
            { name: 'T-Bone Steaks', image: tBoneSteak, price: '$18.99', description: 'A classic cut featuring both tenderloin and strip steak, ideal for steak lovers..' },
            { name: 'Strip Steaks', image: stripSteak, price: '$16.89', description: 'Also known as New York strip, it’s tender with a fine texture and robust taste.' },
        ],
        Pizza: [
            { name: 'Pizza 1', image: pizza1, price: '$12.99', description: 'Fresh vegetables and herbs on a crispy, cheesy base for a healthy delight.' },
            { name: 'Pizza 2', image: pizza2, price: '$13.99', description: 'Tender chicken pieces with flavorful spices on a cheesy crust..' },
            { name: 'Pizza 3', image: pizza3, price: '$14.99', description: 'A fusion twist with crunchy papri toppings adding a spicy crunch' },
            { name: 'Pizza 4', image: pizza4, price: '$15.99', description: 'Loaded with gooey, melted cheese for the ultimate cheesy experience.' },
        ],
        Fastfood: [
            { name: 'Burger 1', image: burger1, price: '$8.99', description: 'Juicy grilled beef patty with fresh lettuce, tomato, onions, and special sauce in a soft bun..' },
            { name: 'Burger 2', image: burger2, price: '$9.99', description: 'Tender grilled chicken breast with crisp lettuce, mayo, and a hint of spice..' },
            { name: 'Burger 3', image: burger3, price: '$10.99', description: 'Melted cheddar cheese on a flavorful beef patty topped with pickles and ketchup.' },
            { name: 'Burger 4', image: burger4, price: '$11.99', description: 'A delicious blend of vegetables and spices, served with fresh greens and tangy sauce..' },
        ],
        Sushi: [
            { name: 'Sushi 1', image: sushi1, price: '$16.99', description: 'Delicious sushi.' },
            { name: 'Sushi 2', image: sushi2, price: '$17.99', description: 'Another sushi.' },
            { name: 'Sushi 3', image: sushi3, price: '$18.99', description: 'Tasty sushi.' },
            { name: 'Sushi 4', image: sushi4, price: '$19.99', description: 'Special sushi.' },
        ],
        VegetarianFood: [
            { name: 'Veggie 1', image: veggie1, price: '$9.99', description: 'Colorful seasonal vegetables marinated and grilled to perfection..' },
            { name: 'Veggie 2', image: veggie2, price: '$10.99', description: 'Spiced and grilled paneer cubes served with fresh mint chutney.' },
            { name: 'Veggie 3', image: veggie3, price: '$11.99', description: 'Pasta tossed with fresh vegetables and a light tomato sauc' },
            { name: 'Veggie 4', image: veggie4, price: '$12.99', description: 'Special veggie dish.' },
        ],
    };

    return (
        <div className="popular-dishes-section">
            <h2 className="amazing-taste">Amazing Taste</h2>
            <h1 className="popular-dishes-title">Popular Dishes</h1>
            <div className="category-buttons">
                <button className={category === 'Meat' ? 'active' : ''} onClick={() => setCategory('Meat')}>Meat</button>
                <button className={category === 'Pizza' ? 'active' : ''} onClick={() => setCategory('Pizza')}>Pizza</button>
                <button className={category === 'Fastfood' ? 'active' : ''} onClick={() => setCategory('Fastfood')}>Fastfood</button>
                <button className={category === 'Sushi' ? 'active' : ''} onClick={() => setCategory('Sushi')}>Sushi</button>
                <button className={category === 'VegetarianFood' ? 'active' : ''} onClick={() => setCategory('VegetarianFood')}>Vegetarian Food</button>
            </div>
            <div className="popular-dishes-container">
                {dishes[category].map((dish, index) => (
                    <div className="popular-dishes-item" key={index}>
                        <img src={dish.image} alt={dish.name} />
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <span className="price">{dish.price}</span>
                     
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularDishesSection;
