import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import TestimonialsHero from './TestimonialsHero';
import TestimonialsFooter from './TestimonialsFooter';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', email: '', review: '' });
  const [showOptions, setShowOptions] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', review: '' });

  // Fetch reviews
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:5000/api/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  
  const handleInputChange = e =>
    setNewReview({ ...newReview, [e.target.name]: e.target.value });

  const handleEditChange = e =>
    setEditData({ ...editData, [e.target.name]: e.target.value });

  // Submit new review
  const handleSubmit = async e => {
    e.preventDefault();
    if (!newReview.name || !newReview.email || !newReview.review) {
      return alert('Please fill all fields.');
    }
    try {
      const res = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newReview }), 
      });
      if (!res.ok) throw new Error();
      const saved = await res.json();
      setReviews([saved, ...reviews]);
      setNewReview({ name: '', email: '', review: '' });
      alert('Review submitted successfully!');
    } catch {
      alert('Failed to add review.');
    }
  };

  // Edit review
  const startEdit = review => {
    setEditingId(review._id);
    setEditData({ name: review.name, email: review.email, review: review.review });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({ name: '', email: '', review: '' });
  };

  const saveEdit = async id => {
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editData }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setReviews(reviews.map(r => (r._id === id ? updated : r)));
      cancelEdit();
      alert('Review updated successfully!');
    } catch {
      alert('Failed to update.');
    }
  };

  // Delete review
  const handleDelete = async id => {
    if (!window.confirm('Delete this review?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error();
      setReviews(reviews.filter(r => r._id !== id));
      setShowOptions(null);
      alert('Review deleted successfully!');
    } catch {
      alert('Failed to delete.');
    }
  };

  return (
    <div className="testimonials-container">
      <TestimonialsHero />
      <h1 className="testimonials-heading">Our Clients Review</h1>
      <div className="content-wrapper">
        <div className="reviews-container">
          {reviews.map(review => (
            <div key={review._id} className="review-card">
              <div className="review-options">
                <span
                  className="dots"
                  onClick={() => setShowOptions(showOptions === review._id ? null : review._id)}
                >
                  ⋯
                </span>
                {showOptions === review._id && (
                  <div className="options">
                    <button onClick={() => startEdit(review)}>Edit</button>
                    <button onClick={() => handleDelete(review._id)}>Delete</button>
                  </div>
                )}
              </div>

              {editingId === review._id ? (
                <div className="review-form">
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                  />
                  <input
                    name="email"
                    value={editData.email}
                    onChange={handleEditChange}
                  />
                  <textarea
                    name="review"
                    value={editData.review}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => saveEdit(review._id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                <>
                  <div className="review-header">
                   
                    <h3 className="review-name">{review.name}</h3>
                  </div>
                  <p className="review-text">{review.review}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="right-side-content">
          <div className="review-form">
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newReview.name}
                onChange={handleInputChange}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newReview.email}
                onChange={handleInputChange}
                autoComplete="off"
              />
              <textarea
                name="review"
                placeholder="Write a review"
                value={newReview.review}
                onChange={handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
       
        </div>
      </div>
      <TestimonialsFooter />
    </div>
  );
};

export default Testimonials;
