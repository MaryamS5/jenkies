import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './RestaurantFeedback.css';

const RestaurantFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [editingId, setEditingId] = useState(null);
  const [openFeedbackId, setOpenFeedbackId] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const res = await axios.get('http://localhost:5000/feedbacks');
    setFeedbacks(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { name, email, comment, rating };

    if (editingId) {
      const res = await axios.put(`http://localhost:5000/feedbacks/${editingId}`, feedback);
      setFeedbacks(feedbacks.map(f => f._id === editingId ? res.data : f));
      setEditingId(null);
    } else {
      const res = await axios.post('http://localhost:5000/feedbacks', feedback);
      setFeedbacks([...feedbacks, res.data]);
    }

    setName('');
    setEmail('');
    setComment('');
    setRating(0);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/feedbacks/${id}`);
    setFeedbacks(feedbacks.filter(f => f._id !== id));
  };

  const handleEdit = (feedback) => {
    setName(feedback.name);
    setEmail(feedback.email);
    setComment(feedback.comment);
    setRating(feedback.rating);
    setEditingId(feedback._id);
  };

  const handleRatingClick = (num) => {
    setRating(num);
  };

  const toggleDropdown = (id) => {
    setOpenFeedbackId(openFeedbackId === id ? null : id);
  };

  return (
    <div className="feedback-section">
      <div className="feedback-list">
        <h2>Feedbacks ({feedbacks.length})</h2>
        {feedbacks.map(feedback => (
          <div className="feedback-item" key={feedback._id}>
            <div className="feedback-header">
              <div>
                <span className="feedback-name">{feedback.name}</span>
                <span className="feedback-date">{feedback.date}</span>
              </div>
              <div className="feedback-actions">
                <div className="feedback-rating">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <AiOutlineStar key={i} />
                  ))}
                </div>
                <div className="dropdown" ref={dropdownRef}>
                  <BsThreeDotsVertical
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(feedback._id)}
                  />
                  {openFeedbackId === feedback._id && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleEdit(feedback)}>Edit</button>
                      <button onClick={() => handleDelete(feedback._id)}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="feedback-comment">{feedback.comment}</div>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <h2>{editingId ? 'EDIT REVIEW' : 'LEAVE A REVIEW'}</h2>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Write a review"
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <div className="rating-stars">
          {[1,2,3,4,5].map(num => (
            <AiOutlineStar
              key={num}
              className={rating >= num ? 'active' : ''}
              onClick={() => handleRatingClick(num)}
            />
          ))}
        </div>
        <button type="submit" className="submit-button">
          {editingId ? 'UPDATE' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default RestaurantFeedback;
