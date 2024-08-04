// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter name' required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter email address' required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder='Enter message' required />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>  );
};

export default Contact;
