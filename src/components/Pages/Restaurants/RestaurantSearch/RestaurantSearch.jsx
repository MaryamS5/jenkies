import React, { useState } from 'react';
import './RestaurantSearch.css';

function RestaurantSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState('');

    const restaurants = [
        'Vegetarian Fresh life',
        'Beer power',
        'Hot pastry cafe',
        'Sushi Taste',
        'Bulgarian restaurant'
    ];

    const handleSearch = () => {
        const found = restaurants.find(r =>
            r.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResult(found || 'Restaurant is not available');
    };

    return (
        <div className="restaurant-search-container">
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search Restaurant
                </button>
            </div>

            {result && (
                <p className={`result-message ${result === 'Restaurant is not available' ? 'error' : ''}`}>
                    {result}
                </p>
            )}
        </div>
    );
}

export default RestaurantSearch;
