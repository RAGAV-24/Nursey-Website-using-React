import React from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';  // You need to install this package
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const totalPrice = cart.reduce((acc, curr) => acc + parseFloat(curr.price.slice(1)), 0).toFixed(2);

  const handlePayment = () => {
    // Payment integration logic here
    alert("Payment successful!");
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        {cart.map(item => (
          <div key={item.id} className="cart-summary-item">
            <p>{item.name} - {item.price}</p>
          </div>
        ))}
        <p>Total: ${totalPrice}</p>
      </div>

      <div className="qr-code-section">
        <h3>Scan QR Code to Pay</h3>
        <QRCode value={`Total Price: $${totalPrice}`} />
      </div>

      <button className="proceed-payment-btn" onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default PaymentPage;
