import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { allProducts } from '../products';
import './HomePage.css';
const PlantsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts.filter(product => product.category === 'plants'));
  }, []);

  return (
    <div className="plants-page">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default PlantsPage;