// src/pages/WishlistPage.js
import React from 'react';
import './CartPage.css'; // Import the CSS file for WishlistPage styling

const WishlistPage = ({ wishlist, addToWishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items added to wishlist</p>
      ) : (
        <div>
          {wishlist.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
