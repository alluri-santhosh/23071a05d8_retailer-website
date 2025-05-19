import React from 'react';

function Invoice() {
  // For simplicity, static invoice data
  const invoiceData = {
    invoiceNumber: 'INV-001',
    date: new Date().toLocaleDateString(),
    items: [
      { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1 },
    ],
  };

  const total = invoiceData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Invoice</h2>
      <p><strong>Invoice Number:</strong> {invoiceData.invoiceNumber}</p>
      <p><strong>Date:</strong> {invoiceData.date}</p>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Item</th><th>Price</th><th>Quantity</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
            <td><strong>${total.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
