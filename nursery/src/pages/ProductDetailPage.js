// src/pages/ProductDetailPage.js
import React from 'react';

const ProductDetailPage = ({ match }) => {
  const productId = match.params.productId; // Extract the productId from the URL

  // You can fetch additional details about the product based on the productId if needed
  // For now, we'll just display the productId
  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetailPage;
