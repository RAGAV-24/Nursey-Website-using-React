// src/LoginPage.js
import React, { useState,nav } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
import './HomePage.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:2000/login', { username, password })
      .then(response => {
        console.log(response);
        if (response.data) { 
          alert('Welcome ' + username);
          window.location.href = '/login';
        } else {
          
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        console.error(error);
        
        alert('An error occurred during login. Please try again later.');
      });

    }
  return (
    <div className="login-background">
      <div className="login-box">
        <img src="Images/NM.png" alt="Login" className="login-image" />
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Create Account</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;