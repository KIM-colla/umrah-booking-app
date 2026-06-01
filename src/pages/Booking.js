import React, { useState } from 'react';
import './Booking.css';

function Booking({ cart }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    passportNumber: '',
    paymentMethod: 'credit-card'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (submitted) {
    return (
      <div className="booking-confirmation">
        <div className="confirmation-content">
          <div className="confirmation-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Thank you for your booking. A confirmation email has been sent to {formData.email}</p>
          <div className="confirmation-details">
            <h3>Booking Reference: #BKG{Math.floor(Math.random() * 1000000)}</h3>
            <p>Our team will contact you shortly.</p>
          </div>
          <button onClick={() => window.location.href = '/'} className="btn-home">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking">
      <div className="booking-container">
        <h1>Complete Your Booking</h1>

        <div className="booking-content">
          <div className="booking-form-section">
            {cart.length > 0 ? (
              <form onSubmit={handleSubmit}>
                <section className="form-section">
                  <h2>Personal Information</h2>
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>

                <section className="form-section">
                  <h2>Contact Information</h2>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>

                <section className="form-section">
                  <h2>Address</h2>
                  <div className="form-group">
                    <label>Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </section>

                <section className="form-section">
                  <h2>Passport Information</h2>
                  <div className="form-group">
                    <label>Passport Number *</label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>

                <section className="form-section">
                  <h2>Payment Method</h2>
                  <div className="payment-options">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleChange}
                      />
                      Credit Card
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="debit-card"
                        checked={formData.paymentMethod === 'debit-card'}
                        onChange={handleChange}
                      />
                      Debit Card
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank-transfer"
                        checked={formData.paymentMethod === 'bank-transfer'}
                        onChange={handleChange}
                      />
                      Bank Transfer
                    </label>
                  </div>
                </section>

                <button type="submit" className="btn-complete-booking">
                  Complete Booking
                </button>
              </form>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty. Please add packages before booking.</p>
                <a href="/packages" className="btn-continue-shopping">
                  Continue Shopping
                </a>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="booking-summary">
              <h2>Order Summary</h2>
              <div className="summary-items">
                {cart.map((item, idx) => (
                  <div key={idx} className="summary-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price} x {item.quantity}</span>
                    <span className="item-total">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <h3>Total Amount</h3>
                <span className="total-amount">${totalPrice}</span>
              </div>
              <div className="booking-terms">
                <label>
                  <input type="checkbox" required />
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;
