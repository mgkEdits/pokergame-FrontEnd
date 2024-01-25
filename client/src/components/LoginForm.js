import React, { useState } from 'react';
import {  Link } from 'react-router-dom'
import axios from 'axios';
import Home from './Home';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      });

      setMessage(response.data.message);
      <Home/>
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <div className='form-rct'>
      <h1>Login</h1>
      
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      
     
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button onClick={handleLogin}>Login</button>
      <a><Link to="sign-in">SignupForm</Link></a>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
