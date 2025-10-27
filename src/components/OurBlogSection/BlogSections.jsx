import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogSections.css';
import backgroundImage from './Images/food-background.jpg'; 

import recipe1 from './Images/receipe1.jpg';
import recipe2 from './Images/receipe2.jpg';
import recipe3 from './Images/receipe3.jpg';
import recipe4 from './Images/receipe4.jpg';
import recipe5 from './Images/recipe5.jpg';
import recipe6 from './Images/recipe6.jpg';
import FooterSection from '../Home/FooterSection/FooterSection';


function BlogSections() {
    const navigate = useNavigate();

    const firstRowPosts = [
        {
            id: 1,
            image: recipe1,
            category: 'Recipe',
            author: 'Antonio Refflis',
            date: 'May 15, 2020',
            title: 'The Traditional Recipe',
            content: 'Detailed content for The Traditional Recipe...'
        },
        {
            id: 2,
            image: recipe2,
            category: 'Recipe',
            author: 'Carlos Bolitti',
            date: 'May 14, 2020',
            title: 'Famous Vanilla Bean',
            content: 'Detailed content for Famous Vanilla Bean...'
        },
        {
            id: 3,
            image: recipe3,
            category: 'Recipe',
            author: 'Nicolas Mano',
            date: 'May 12, 2020',
            title: 'The Most Tasty Cake',
            content: 'Detailed content for The Most Tasty Cake...'
        },
    ];

    const secondRowPosts = [
        {
            id: 4,
            image: recipe4, 
            category: 'Recipe',
            author: 'Sarah Khan',
            date: 'May 10, 2020',
            title: 'Spicy Chicken Biryani',
            content: 'Detailed content for Spicy Chicken Biryani...'
        },
        {
            id: 5,
            image: recipe5,
            category: 'Recipe',
            author: 'Ali Ahmed',
            date: 'May 9, 2020',
            title: 'Homemade Naan',
            content: 'Detailed content for Homemade Naan...'
        },
        {
            id: 6,
            image: recipe6,
            category: 'Recipe',
            author: 'Fatima Malik',
            date: 'May 8, 2020',
            title: 'Mango Lassi',
            content: 'Detailed content for Mango Lassi...'
        },
    ];

    const handleRecipeClick = (recipe) => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe } });
    };

    return (
        <div>
           
            <div 
                className="restaurant-hero" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="restaurant-hero-overlay"></div>
                <div className="restaurant-hero-content">
                    <h1> Blogs</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span className="separator">—</span>
                        <span className="current">Restaurants and cafes</span>
                    </div>
                </div>
            </div>

           
            <div className="blog-section" style={{ marginTop: '40px' }}>
                <div className="blog-header">
                    <span className="our-blog">Our blog</span>
                    <h2>Latest Posts & Articles</h2>
                    <p>Yahan aap mashhoor chefs ki recipes aur useful maloomat hasil kar sakte hain.</p>
                </div>

               
                <div className="blog-posts">
                    {firstRowPosts.map((post, index) => (
                        <div 
                            className="blog-post" 
                            key={`first-${index}`}
                            onClick={() => handleRecipeClick(post)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="post-image">
                                <span className="category">{post.category}</span>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="post-details">
                                <div className="author-date">
                                    <span className="author">{post.author}</span>
                                    <span className="date">{post.date}</span>
                                </div>
                                <h3 className="post-title">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

              
                <div className="blog-posts" style={{ marginTop: '40px' }}>
                    {secondRowPosts.map((post, index) => (
                        <div 
                            className="blog-post" 
                            key={`second-${index}`}
                            onClick={() => handleRecipeClick(post)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="post-image">
                                <span className="category">{post.category}</span>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="post-details">
                                <div className="author-date">
                                    <span className="author">{post.author}</span>
                                    <span className="date">{post.date}</span>
                                </div>
                                <h3 className="post-title">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterSection/>
        </div>
    );
}

export default BlogSections;
