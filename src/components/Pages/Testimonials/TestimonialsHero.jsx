import React from 'react';
import './TestimonialsHero.css';
import backgroundImage from './Images/your-background-image.jpg';


function TestimonialsHero() {
    return (
        <div className="testimonials-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="testimonials-hero-overlay"></div>
            <div className="testimonials-hero-content">
                <h1>Testimonials</h1>
                <div className="breadcrumb">
                    <a href="/">Home</a>
                    <span className="separator">—</span>
                    <a href="/about">About Us</a>
                    <span className="separator">—</span>
                    <span className="current">Testimonials</span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsHero;
