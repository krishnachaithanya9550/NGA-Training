// LoginAndFetch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginAndFetch = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwtToken, setJwtToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5021/api/login', {
        username,
        password,
      });
      
      const token = response.data.token; 
      console.log('JWT Token:', token);
      localStorage.setItem('token', token);

      setJwtToken(token);
      fetchData(token);

    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid login credentials');
    }
  };
  const fetchData = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/api/product', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Fetched products:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <h2>Login to Fetch Data</h2>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      {/* Display JWT Token */}
      {jwtToken && <p>JWT Token: {jwtToken}</p>}

      {/* Error Message */}
      {error && <p>{error}</p>}

      {/* Display Products */}
      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li> // Adjust according to your product object structure
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default LoginAndFetch;
