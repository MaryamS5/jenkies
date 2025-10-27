import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './BlogSection.css';
import recipe1 from '../BlogSection/Images/receipe1.jpg';
import recipe2 from '../BlogSection/Images/receipe4.jpg';
import recipe3 from '../BlogSection/Images/receipe3.jpg';

function BlogSection() {
    const navigate = useNavigate();  

    const posts = [
        {
            image: recipe1,
            category: 'Recipe',
            author: 'Antonio Refflis',
            date: 'May 15, 2020',
            title: 'The Traditional Recipe',
        },
        {
            image: recipe2,
            category: 'Recipe',
            author: 'Carlos Bolitti',
            date: 'May 14, 2020',
            title: 'Famous Vanilla Bean',
        },
        {
            image: recipe3,
            category: 'Recipe',
            author: 'Nicolas Mano',
            date: 'May 12, 2020',
            title: 'The Most Tasty Cake',
        },
    ];

    return (
        <div className="blog-section">
            <div className="blog-header">
                <span className="ourr-blog">Our blog</span>
                <h2>Latest Posts & Articles</h2>
                <p>Here you can find recipes from the most famous chefs and read useful information.</p>
            </div>
            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div
                        className="blog-post"
                        key={index}
                        onClick={() => {
                            if(post.title === 'The Traditional Recipe') {
                                navigate('/Blogs'); 
                            }
                        }}
                        style={post.title === 'The Traditional Recipe' ? { cursor: 'pointer' } : {}}
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
    );
}

export default BlogSection;
