import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://guided-aftermath-7976-users.onrender.com/users');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        login(user.name);
        setLoginResult('success');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoginResult('fail');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Box p="4">
      <Heading>Login Page</Heading>
      {/* Email Input */}
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password Input */}
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login Button */}
      <Button onClick={handleLogin}>Login</Button>

      {/* Display login result */}
      {loginResult === 'success' && <p>Login successful! Redirecting to home...</p>}
      {loginResult === 'fail' && <p>Login failed. Please check your credentials.</p>}
    </Box>
  );
};

export default LoginPage;
