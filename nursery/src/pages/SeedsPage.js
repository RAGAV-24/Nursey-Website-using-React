import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { allProducts } from '../products';
import './HomePage.css';
const SeedsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts.filter(product => product.category === 'seeds'));
  }, []);

  return (
    <div className="seeds-page">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default SeedsPage;
