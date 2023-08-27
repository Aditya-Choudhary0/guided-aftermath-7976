import React from 'react';
import { Flex, Box, Link, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Flex bg="gray.200" p="4" justify="space-between" align="center">
      {/* Links to Pages */}
      <Box>
        <Link as={RouterLink} to="/">Home</Link>
        <Link as={RouterLink} to="/product">Product</Link>
        <Link as={RouterLink} to="/about">About Us</Link>
        <Link as={RouterLink} to="/contact">Contact</Link>
      </Box>

      {/* Social Media Links */}
      <Box>
        <Link href="https://www.facebook.com/" isExternal mr="2">
          <Icon as={FaFacebook} boxSize="6" />
        </Link>
        <Link href="https://www.instagram.com/" isExternal mr="2">
          <Icon as={FaInstagram} boxSize="6" />
        </Link>
        <Link href="https://www.twitter.com/" isExternal mr="2">
          <Icon as={FaTwitter} boxSize="6" />
        </Link>
        <Link href="mailto:your@email.com" isExternal>
          <Icon as={FaEnvelope} boxSize="6" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
