import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// Import other page components if needed 

const AppRoutes = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <RouterRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} /> */}
          </RouterRoutes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default AppRoutes;
