import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import FooterSection from "../ContactUs/FooterSection/FooterSection";
import backgroundImage from './Images/Pizza+Dark.jpg';
import { Link } from 'react-router-dom';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/contact');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error('Failed to fetch contacts', err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill all the fields');
      return;
    }

    try {
      const url = editId
        ? `http://localhost:5000/api/contact/${editId}`
        : 'http://localhost:5000/api/contact';

      const method = editId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || 'Failed to submit form');
        return;
      }

      alert(editId ? 'Message updated successfully!' : 'Message submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setEditId(null);
      fetchContacts();
    } catch (error) {
      alert('Server error. Please try again later.');
      console.error(error);
    }
  };

  const handleEdit = (contact) => {
    setName(contact.name);
    setEmail(contact.email);
    setMessage(contact.message);
    setEditId(contact._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE'
      });
      fetchContacts();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };
  
  return (
    <div>
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <div className="contact-header">
          <h1 className="contacts-title">Contact Us</h1>
          <p className="contact-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="contact-separator"> — </span>
            <Link to="/contact" className="breadcrumb-link">Contact us</Link>
          </p>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h4 className="contact-subtitle">Be In Touch</h4>
          <h1 className="contact-title">Send Us A Message</h1>
          <p className="contact-description">
            If you need a consultation regarding collaboration, let us know or maybe you have another question. Don’t be shy, send us a message.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-right">
          <p><strong>Phone number:</strong><br /> <span className="bold">+1 654 847 52 25</span></p>
          <p><strong>Email:</strong><br /> <span className="bold">info@sitename.com</span></p>
          <p>
  <strong>Working hours:</strong>
  <span class="bold compact">Mon - Fri: 9:00 am - 10:00 pm</span>
</p>
<p>
  <span class="bold compact">Sat - Sun: 10:00 am - 11:00 pm</span>
</p>


        </div>
      </div>

      <div className="contact-messages-section">
  <h2>Submitted Messages</h2>
  <ul className="contact-list">
    {contacts.map((c) => (
      <li key={c._id} className="contact-item">
  {editId === c._id ? (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="form-row">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        rows="4"
        required
      />
      <div className="button-group">
        <button type="submit" className="submit-btn">Update</button>
        <button onClick={() => setEditId(null)} type="button" className="cancel-btn">Cancel</button>
      </div>
    </form>
  ) : (
    <>
      <p><strong>Name:</strong> {c.name}</p>
      <p><strong>Email:</strong> {c.email}</p>
      <p><strong>Message:</strong> {c.message}</p>
      <div className="button-group">
        <button className="edit-btn" onClick={() => handleEdit(c)}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(c._id)}>Delete</button>
      </div>
    </>
  )}
</li>

    ))}
  </ul>


</div>


      <FooterSection />
    </div>
  );
};

export default ContactUs;
