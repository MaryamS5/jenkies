import React from 'react';
import './AboutUs.css';
import FooterSection from '../AboutUs/FooterSection/FooterSection';
import backgroundImage from './Images/Pizza+Dark.jpg';

import aboutmanImage from './Images/aboutman.jpeg';

import girlImage from './Images/girl.jpeg';
import superImage from './Images/Super.jpeg';
import glassImage from './Images/glass.jpeg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTags,
  faTruckFast,
  faUtensils,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGooglePlay,
  faAppStoreIos
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div>
      
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="about-separator"> — </span>
            <Link to="/about" className="breadcrumb-link">About us</Link>
          </p>
        </div>
      </div>

      <div className="about-container">
       
        <div className="about-showcase">
          <div className="about-showcase-left">
           
            <div className="image-container">
              <img src={aboutmanImage} alt="Man" className="image-placeholder" />
            </div>
            <div className="image-container">
              <img src={girlImage} alt="Girl" className="image-placeholder" />
            </div>
          </div>

          
          <div className="about-showcase-text">
            <h3>
              We deliver food as soon as possible. Our team works seven days a week
              and is always ready to answer any of your questions.
            </h3>
            <p>
            We are a team of hardworking and friendly people who work every day on a common goal for more than 5 years. Each ctro at us begins with coffee. Together we develop, grow and relax. More than 50 restaurants and cafes cooperate with us. More than 250 employees are working to improve our service. We always work for our beloved customers and try to be on top. We have a favorable system of discounts for regular customers and good conditions for cooperation with partners.
            </p>
          </div>

          <div className="about-showcase-right">
            <div className="showcase-feature">
              <FontAwesomeIcon icon={faTags} className="feature-icon" />
              <div>
                <h3>Discount System</h3>
                <p>We have a favorable discount system for our regular customers.</p>
              </div>
            </div>
            <div className="showcase-feature">
              <FontAwesomeIcon icon={faTruckFast} className="feature-icon" />
              <div>
                <h3>Express Delivery</h3>
                <p>The hottest food & fastest delivery to any location of your city.</p>
              </div>
            </div>
            <div className="showcase-feature">
              <FontAwesomeIcon icon={faUtensils} className="feature-icon" />
              <div>
                <h3>50+ Restaurants</h3>
                <p>We are connected with more than 50 top-rated restaurants in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <section className="about-app-section">
        <div className="app-content">
      
          <div className="app-features">
            <h2 className="about-app-title">
              Make Orders With Our <span>Application</span>
            </h2>
            <div className="app-feature">
              <FontAwesomeIcon icon={faCheckCircle} className="app-feature-icon" />
              <div>
                <h4>Order and pay in a few minutes</h4>
                <p>
                  Choose food and pay for the order in a couple of clicks online.
                  Also choose your current location using GPS.
                </p>
              </div>
            </div>
            <div className="app-feature">
              <FontAwesomeIcon icon={faCheckCircle} className="app-feature-icon" />
              <div>
                <h4>Check Delivery Status</h4>
                <p>
                  Follow the status of your order in real time and track the delivery path until you get it.
                </p>
              </div>
            </div>
          </div>

      
          <div className="app-badges">
            <a href="#" aria-label="Get it on Google Play" className="app-badge-link">
              <FontAwesomeIcon icon={faGooglePlay} className="app-badge-icon" />
              <span>Google Play</span>
            </a>
            <a href="#" aria-label="Download on the App Store" className="app-badge-link">
              <FontAwesomeIcon icon={faAppStoreIos} className="app-badge-icon" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </section>

     
      <section className="partnership-section">
        <div className="partnership-card">
          <img src={superImage} alt="Courier Partner" className="partnership-image" />
          <div className="partnership-content">
            <h3>Get paid as a courier partner</h3>
            <Link to="/courier-signup" className="partnership-link">
              <span className="partnership-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="partnership-card">
          <img src={glassImage} alt="Restaurant Partner" className="partnership-image" />
          <div className="partnership-content">
            <h3>Become a restaurant partner</h3>
            <Link to="/restaurant-signup" className="partnership-link">
              <span className="partnership-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

     
      <section className="newsletter">
        <div className="newsletter-left">
          <h2>Newsletter</h2>
          <p>Don't miss promotions and discounts.</p>
        </div>
        <div className="newsletter-right">
          <input type="email" placeholder="Enter your email" />
          <button onClick={() => alert('Successfully Subscribed!')}>
            Subscribe
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;