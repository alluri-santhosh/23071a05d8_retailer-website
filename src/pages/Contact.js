import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent from ' + formData.name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message: </label><br />
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
