import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/App.css"

const App = () => {
  return (
    <Router>
    
      <div className="App">
        <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route  path="/contact" element={<ContactPage/>} />
            <Route  path="/cart" element={<CartPage/>} />
            <Route  path="/products/:id" element={<ProductPage/>} />
            <Route  path="/checkout-success" element={<CheckoutSuccessPage/>} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer/>
      </div>
    
    </Router>
  );
};
export default App;
