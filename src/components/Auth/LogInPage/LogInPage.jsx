import React, { useState } from 'react';
import './LogInPage.css';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from './Pizza+Dark.jpg';

const LogInPage = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(`Welcome back, ${data.firstName}! Login successful.`);
      navigate('/');
    } catch (error) {
      alert('Server error. Please try again later.');
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="about-header">
          <h1 className="about-title">SignIn</h1>
          <p className="about-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="about-separator"> — </span>
            <span
              className="breadcrumb-link"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsLogin(true)}
            >
              SignIn
            </span>
          </p>
        </div>
      </div>

      <div className="login-page-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p>
          Need an account?{' '}
          <span onClick={() => setIsLogin(false)} style={{ color: 'blue', cursor: 'pointer' }}>
            Signup
          </span>
        </p>
      </div>
    </>
  );
};

export default LogInPage;
