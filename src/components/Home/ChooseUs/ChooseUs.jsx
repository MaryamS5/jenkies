
import React from 'react';
import './ChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage, faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons';

function ChooseUs() {
    return (
        <div className="choose-us-section">
            <h2 className="section-subtitle">The reason why</h2>
            <h1 className="section-title">Why People Choose Us</h1>
            <p className="section-description">
                We have many advantages but we will highlight
                <br />
                only some of them, look below.
            </p>
            <div className="advantages-container">
                <div className="advantage">
                    <FontAwesomeIcon icon={faPercentage} className="advantage-icon" />
                    <h3 className="advantage-title">Discount System</h3>
                    <p className="advantage-description">
                        We have a favorable discount system for our regular customers.
                    </p>
                </div>
                <div className="advantage">
                    <FontAwesomeIcon icon={faTruck} className="advantage-icon" />
                    <h3 className="advantage-title">Express Delivery</h3>
                    <p className="advantage-description">
                        The hottest food & fastest delivery to any location of your city.
                    </p>
                </div>
                <div className="advantage">
                    <FontAwesomeIcon icon={faUtensils} className="advantage-icon" />
                    <h3 className="advantage-title">50+ Restaurants</h3>
                    <p className="advantage-description">
                        Large selection of restaurants and cafes throughout the country.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;
