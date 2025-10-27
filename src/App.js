import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Home/Header/Header';
import NavigationBar from './components/Home/NavigationBar/NavigationBar';
import HeroSection from './components/Home/HeroSection/HeroSection';
import StepsSection from './components/Home/StepsSection/StepsSection';
import FeaturedRestaurantss from './components/Home/FeaturedRestaurants/FeaturedRestaurantss';
import RestaurantsSection from './components/Home/RestaurantsSection/RestaurantsSection';
import ChooseUs from './components/Home/ChooseUs/ChooseUs';
import DiscountSection from './components/Home/DiscountSection/DiscountSection';
import TestimonialsSection from './components/Home/TestimonialsSection/TestimonialsSection';
import PopularDishesSection from './components/Home/PopularDishesSection/PopularDishesSection';
import OrderSection from './components/Home/OrderSection/OrderSection';
import BlogSection from './components/Home/BlogSection/BlogSection';
import FooterSection from './components/Home/FooterSection/FooterSection';
import SignIn from './components/Pages/SignIn/SignIn';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import BlogSections from './components/OurBlogSection/BlogSections';
import Restaurants from './components/Pages/Restaurants/Restaurants';
import RestaurantDetail from './components/Pages/RestaurantsDetails/RestaurantsDetails';
import Cart from './components/Pages/Cart/Cart';
import CheckoutComponent from './components/Pages/CheckOut/CheckoutComponent';
import MyProfile from './components/Pages/MyProfile/MyProfile';
import FAQs from './components/Pages/FAQs/FAQs';
import Testimonials from './components/Pages/Testimonials/Testimonials';


import { CartProvider } from './components/Pages/Cart/CartContext';



function HomePage() {
    return (
        <>
            <HeroSection />
            <StepsSection />
            <FeaturedRestaurantss />
            <RestaurantsSection />
            <ChooseUs />
            <DiscountSection />
            <TestimonialsSection />
            <PopularDishesSection />
            <OrderSection />
            <BlogSection />
            <FooterSection />
        </>
    );
}

function App() {
    return (
        <Router>
            <CartProvider>
                <Header />
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/restaurant-detail" element={<RestaurantDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckoutComponent />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/signIn" element={<SignIn/>} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                     <Route path="/Recipe" element={<BlogSections/>}/>
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;
