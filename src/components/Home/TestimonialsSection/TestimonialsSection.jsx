import React, { useState } from 'react';
import './TestimonialsSection.css';
import testimonial1 from './Images/testimonial1.jpg'; 
import testimonial2 from './Images/testimonial2.jpg'; 
import testimonial3 from './Images/testimonial3.jpg'; 

const testimonialsData = [
    {
        image: testimonial1,
        text: `Very fast delivery. I recommend to everyone. The food is very
hot and fresh and also as tasty as in a restaurant.
The application is very convenient and understandable.`,
        name: 'Marco Bituchini',
        date: 'May 16, 2020'
    },
    {
        image: testimonial2,
        text: `Great food and amazing service. The delivery was on time,
and the food was delicious. I will definitely order
again!`,
        name: 'Sarah Johnson',
        date: 'June 1, 2020'
    },
    {
        image: testimonial3,
        text: `The best food delivery app I have ever used. The food is always
fresh, and the delivery is always fast. I highly recommend
it!`,
        name: 'Emily Davis',
        date: 'July 10, 2020'
    }
];

function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const goToPrevious = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h3 className="testimonials-title">Testimonials</h3>
                <h2>Happy Clients Say</h2>
            </div>
            <div className="testimonial-slider">
                <button className="slider-arrow left" onClick={goToPrevious}>&lt;</button>
                <div className="testimonial-item">
                    <img src={testimonialsData[currentTestimonial].image} alt="Testimonial" className="testimonial-image" />
                    <p className="testimonial-text">{testimonialsData[currentTestimonial].text}</p>
                    <h3 className="testimonial-name">{testimonialsData[currentTestimonial].name}</h3>
                    <p className="testimonial-date">{testimonialsData[currentTestimonial].date}</p>
                </div>
                <button className="slider-arrow right" onClick={goToNext}>&gt;</button>
            </div>
        </div>
    );
}

export default TestimonialsSection;
