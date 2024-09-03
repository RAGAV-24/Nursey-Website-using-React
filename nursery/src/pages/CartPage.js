import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cart, removeFromCart }) => {
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuy = () => {
    const encodedCart = encodeURIComponent(JSON.stringify(cart));
    window.location.href = `/payment?cart=${encodedCart}`;
  };
  

  return (
    <div className="cart-page">
      <div className="back-to-home-container">
        <Link to="/home">Back to Home</Link>
      </div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items added to cart</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${cart.reduce((acc, curr) => acc + parseFloat(curr.price.slice(1)), 0).toFixed(2)}</p>
          <button onClick={handleBuy}>BUY NOW</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
