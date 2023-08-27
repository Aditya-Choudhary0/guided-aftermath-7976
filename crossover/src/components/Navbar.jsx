import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Spacer, Button, HStack, Image } from '@chakra-ui/react';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout =  () => {
    logout();
  };

  return (
    <Flex bg="blue.500" p="4" align="center">
      {/* Logo */}
      <Box>
        <Image src="/path-to-your-logo.png" alt="Logo" h="40px" />
      </Box>

      <Spacer />

      {/* Navigation */}
      <HStack spacing="4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {user ? (
          <>
            <span>Welcome, {user}!</span>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Box>
            <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
          </Box>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
