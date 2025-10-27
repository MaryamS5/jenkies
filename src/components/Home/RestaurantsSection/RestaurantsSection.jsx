import React, { useState, useRef, useEffect } from 'react';
import './RestaurantsSection.css';
import restaurant1 from './Images/restaurant1.jpg';
import restaurant2 from './Images/restaurant3.jpg';
import restaurant3 from './Images/restaurant5.jpg';
import restaurant4 from './Images/restaurant4.jpg';
import restaurant5 from './Images/restaurant2.jpg';
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function RestaurantsSection() {
    const [isOpen, setIsOpen] = useState({
        restaurant1: { clock: false, calendar: false },
        restaurant2: { clock: false, calendar: false },
        restaurant3: { clock: false, calendar: false },
        restaurant4: { clock: false, calendar: false },
        restaurant5: { clock: false, calendar: false }
    });

    const popupRefs = {
        restaurant1: { clock: useRef(null), calendar: useRef(null) },
        restaurant2: { clock: useRef(null), calendar: useRef(null) },
        restaurant3: { clock: useRef(null), calendar: useRef(null) },
        restaurant4: { clock: useRef(null), calendar: useRef(null) },
        restaurant5: { clock: useRef(null), calendar: useRef(null) }
    };

    const toggleSchedule = (restaurant, iconType) => {
        setIsOpen(prevState => ({
            ...prevState,
            [restaurant]: {
                ...prevState[restaurant],
                [iconType]: !prevState[restaurant][iconType]
            }
        }));
    };

    useEffect(() => {
        const handleClick = (event) => {
            for (const restaurant in popupRefs) {
                for (const iconType in popupRefs[restaurant]) {
                    if (popupRefs[restaurant][iconType].current && !popupRefs[restaurant][iconType].current.contains(event.target)) {
                        setIsOpen(prevState => ({
                            ...prevState,
                            [restaurant]: {
                                ...prevState[restaurant],
                                [iconType]: false
                            }
                        }));
                    }
                }
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const restaurantSchedules = {
        restaurant1: {
            days: 'Mon - Sun',
            time: '10:00 AM - 10:00 PM'
        },
        restaurant2: {
            days: 'Mon - Fri',
            time: '08:00 AM - 08:00 PM'
        },
        restaurant3: {
            days: 'Mon - Fri',
            time: '08:00 AM - 08:00 PM'
        },
        restaurant4: {
            days: 'Mon - Fri',
            time: '08:00 AM - 08:00 PM'
        },
        restaurant5: {
            days: 'Mon - Fri',
            time: '08:00 AM - 08:00 PM'
        },
    };

    return (
        <div className="restaurants-section">
            <div className="restaurants-container">
                <Link to="/restaurant-detail" className="restaurant restaurant-big restaurant-tall" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={restaurant1} alt="Restaurant 1" />
                    <div className="restaurant-type">Restaurant</div>
                    <h3 className="restaurant-name">Bulgarian Restaurant</h3>
                    <div className="schedule-icons">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="schedule-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSchedule('restaurant1', 'clock');
                            }}
                        />
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="schedule-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSchedule('restaurant1', 'calendar');
                            }}
                        />
                    </div>
                    {isOpen.restaurant1.clock && (
                        <div className="schedule-popup" ref={popupRefs.restaurant1.clock}>
                            <div>{restaurantSchedules.restaurant1.time}</div>
                        </div>
                    )}
                    {isOpen.restaurant1.calendar && (
                        <div className="schedule-popup" ref={popupRefs.restaurant1.calendar}>
                            <div>{restaurantSchedules.restaurant1.days}</div>
                        </div>
                    )}
                </Link>

                <div className="restaurant restaurant-small restaurant-tall">
                    <img src={restaurant2} alt="Restaurant 2" />
                    <div className="restaurant-type">Cafe</div>
                    <h3 className="restaurant-name">Coffee Cafe</h3>
                    <div className="schedule-icons">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant2', 'clock')}
                        />
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant2', 'calendar')}
                        />
                    </div>
                    {isOpen.restaurant2.clock && (
                        <div className="schedule-popup" ref={popupRefs.restaurant2.clock}>
                            <div>{restaurantSchedules.restaurant2.time}</div>
                        </div>
                    )}
                    {isOpen.restaurant2.calendar && (
                        <div className="schedule-popup" ref={popupRefs.restaurant2.calendar}>
                            <div>{restaurantSchedules.restaurant2.days}</div>
                        </div>
                    )}
                </div>
                <div className="restaurant restaurant-normal">
                    <img src={restaurant3} alt="Restaurant 3" />
                    <div className="restaurant-type">Asian Food</div>
                    <h3 className="restaurant-name">Spicy Asian Food</h3>
                    <div className="schedule-icons">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant3', 'clock')}
                        />
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant3', 'calendar')}
                        />
                    </div>
                    {isOpen.restaurant3.clock && (
                        <div className="schedule-popup" ref={popupRefs.restaurant3.clock}>
                            <div>{restaurantSchedules.restaurant3.time}</div>
                        </div>
                    )}
                    {isOpen.restaurant3.calendar && (
                        <div className="schedule-popup" ref={popupRefs.restaurant3.calendar}>
                            <div>{restaurantSchedules.restaurant3.days}</div>
                        </div>
                    )}
                </div>
                <div className="restaurant restaurant-normal">
                    <img src={restaurant4} alt="Restaurant 4" />
                    <div className="restaurant-type">Restaurant</div>
                    <h3 className="restaurant-name">Delicious Restaurant</h3>
                    <div className="schedule-icons">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant4', 'clock')}
                        />
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant4', 'calendar')}
                        />
                    </div>
                    {isOpen.restaurant4.clock && (
                        <div className="schedule-popup" ref={popupRefs.restaurant4.clock}>
                            <div>{restaurantSchedules.restaurant4.time}</div>
                        </div>
                    )}
                    {isOpen.restaurant4.calendar && (
                        <div className="schedule-popup" ref={popupRefs.restaurant4.calendar}>
                            <div>{restaurantSchedules.restaurant4.days}</div>
                        </div>
                    )}
                </div>
                <div className="restaurant restaurant-normal">
                    <img src={restaurant5} alt="Restaurant 5" />
                    <div className="restaurant-type">Italian Food</div>
                    <h3 className="restaurant-name">Pasta</h3>
                    <div className="schedule-icons">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant5', 'clock')}
                        />
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="schedule-icon"
                            onClick={() => toggleSchedule('restaurant5', 'calendar')}
                        />
                    </div>
                    {isOpen.restaurant5.clock && (
                        <div className="schedule-popup" ref={popupRefs.restaurant5.clock}>
                            <div>{restaurantSchedules.restaurant5.time}</div>
                        </div>
                    )}
                    {isOpen.restaurant5.calendar && (
                        <div className="schedule-popup" ref={popupRefs.restaurant5.calendar}>
                            <div>{restaurantSchedules.restaurant5.days}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantsSection;
