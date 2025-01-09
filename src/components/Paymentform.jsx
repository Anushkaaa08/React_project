import React, { useState } from 'react';
import '../assets/styles/Paymentform.css'; // Import the CSS file for styling

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.cardholderName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      setError('All fields are required');
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      setSuccess('Payment successful!');
      setError('');
    }, 1000);
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
