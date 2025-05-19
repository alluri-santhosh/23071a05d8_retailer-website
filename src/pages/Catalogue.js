import React, { useState } from 'react';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 15.49 },
];

function Catalogue() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + ' added to cart');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Catalogue</h2>
      <ul>
        {sampleProducts.map(product => (
          <li key={product.id} style={{ marginBottom: 10 }}>
            {product.name} - ${product.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
