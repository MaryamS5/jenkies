import React, { useState } from 'react';
import './SignUpPage.css';
import backgroundImage from './Pizza+Dark.jpg';
import { Link } from 'react-router-dom'; 

const SignUpPage = ({ setIsLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Please fill all the fields');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(data.message);
        return;
      }
  
      alert('Signup successful! You can now log in.');
      setIsLogin(true);
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
          <h1 className="about-title">Signup</h1> 
          <p className="about-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="about-separator"> — </span>
            <span
              className="breadcrumb-link"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </span>
          </p>
        </div>
      </div>

      <div className="signup-page-container">
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="input-field"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">Signup</button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => setIsLogin(true)} style={{ color: 'blue', cursor: 'pointer' }}>
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
