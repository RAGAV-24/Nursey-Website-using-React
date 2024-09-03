import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { allProducts } from '../products';
import './HomePage.css';
const PotsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts.filter(product => product.category === 'pots'));
  }, []);

  return (
    <div className="pots-page">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default PotsPage;
