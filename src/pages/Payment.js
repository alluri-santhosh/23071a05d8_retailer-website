import React, { useState } from 'react';

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processed for card ending in ' + formData.cardNumber.slice(-4));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number: </label><br />
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required maxLength={16} />
        </div>
        <div>
          <label>Expiry Date (MM/YY): </label><br />
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required maxLength={5} />
        </div>
        <div>
          <label>CVV: </label><br />
          <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} required maxLength={3} />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Pay</button>
      </form>
    </div>
  );
}

export default Payment;
