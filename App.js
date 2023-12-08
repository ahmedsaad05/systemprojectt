import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './pages/nav/fotter';
import { Nav } from './pages/nav/nav';
import HomePage from './pages/home/home';
import ProductPage from './pages/products/pro';
import CartPage from './pages/cart/cart';
import ProfilePage from './pages/profile/profile';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
