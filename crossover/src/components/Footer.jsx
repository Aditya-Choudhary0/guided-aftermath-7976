import React from 'react';
import { Flex, Box, Link, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <Flex className={styles.footer} justify="space-between" align="center">
      {/* Links to Pages */}
      <Box>
        <Link as={RouterLink} to="/" className={styles.footerLink}>
          Home
        </Link>
        <Link as={RouterLink} to="/product" className={styles.footerLink}>
          Product
        </Link>
        <Link as={RouterLink} to="/about" className={styles.footerLink}>
          About Us
        </Link>
        <Link as={RouterLink} to="/contact" className={styles.footerLink}>
          Contact
        </Link>
      </Box>

      {/* Social Media Links */}
      <Box>
        <Link href="https://www.facebook.com/" isExternal className={styles.iconLink}>
          <Icon as={FaFacebook} boxSize="6" />
        </Link>
        <Link href="https://www.instagram.com/" isExternal className={styles.iconLink}>
          <Icon as={FaInstagram} boxSize="6" />
        </Link>
        <Link href="https://www.twitter.com/" isExternal className={styles.iconLink}>
          <Icon as={FaTwitter} boxSize="6" />
        </Link>
        <Link href="mailto:your@email.com" isExternal className={styles.iconLink}>
          <Icon as={FaEnvelope} boxSize="6" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
