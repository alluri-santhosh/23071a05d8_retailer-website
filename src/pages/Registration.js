import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful for ' + formData.username);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label><br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Register</button>
      </form>
    </div>
  );
}

export default Registration;
