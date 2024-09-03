import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { allProducts } from '../products';
import './HomePage.css';

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <div className="homepage">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
