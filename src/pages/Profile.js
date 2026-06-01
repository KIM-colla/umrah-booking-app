import React, { useState } from 'react';
import './Profile.css';

function Profile({ user, setUser }) {
  const [isLogin, setIsLogin] = useState(!user);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setUser({ name: formData.email.split('@')[0], email: formData.email });
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setIsLogin(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password === formData.confirmPassword) {
      setUser({ name: formData.name, email: formData.email });
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setIsLogin(false);
    }
  };

  if (user) {
    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">👤</div>
              <h1>Welcome, {user.name}!</h1>
            </div>
            <div className="profile-info">
              <div className="info-item">
                <span className="label">Email</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="label">Member Since</span>
                <span className="value">{new Date().getFullYear()}</span>
              </div>
            </div>
            <div className="profile-actions">
              <button className="btn-edit">Edit Profile</button>
              <button className="btn-bookings">My Bookings</button>
              <button className="btn-logout" onClick={() => setUser(null)}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={`tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLogin} className="auth-form">
              <h2>Login to Your Account</h2>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn-auth">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="auth-form">
              <h2>Create New Account</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                />
              </div>
              <button type="submit" className="btn-auth">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
