import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Invoice from './pages/Invoice';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: 10 }}>Catalogue</Link>
          <Link to="/cart" style={{ marginRight: 10 }}>Cart</Link>
          <Link to="/registration" style={{ marginRight: 10 }}>Register</Link>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>
          <Link to="/payment" style={{ marginRight: 10 }}>Payment</Link>
          <Link to="/invoice" style={{ marginRight: 10 }}>Invoice</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
