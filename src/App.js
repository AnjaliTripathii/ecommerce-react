import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { items } from './components/Data';

function App() {
  const [data, setData] = useState([...items]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      console.log('Product is already in the cart.');
    } else {
      setCart([...cart, product]);
      setCartCount(cartCount + 1);
      console.log('Product added to the cart.');
    }
  };

  return (
    <BrowserRouter>
      <Navbar setData={setData} setSearchTerm={setSearchTerm} cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<ProductListing items={searchTerm ? filteredData : data} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/productdetail/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
