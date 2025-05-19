import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful for ' + formData.username);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label><br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
