import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Flex, Box, Spacer, Button, HStack, Image } from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import styles from './navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Flex className={styles.navbar} p="4" align="center">
      <Box>
        <Image src="https://drive.google.com/file/d/1mD6aprMcZG5_o6guysF27cxinrDk1SaA/view?usp=drive_link" alt="Logo" h="40px" />
      </Box>
 
      <Spacer />

      <HStack spacing="4" className={styles.navLinks}>
        <NavLink to="/" exact activeClassName={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/product" activeClassName={styles.activeLink}>
          Products
        </NavLink>
        <NavLink to="/cart" activeClassName={styles.activeLink}>
          Cart
        </NavLink>
        {user ? (
          <>
            <span className={styles.userWelcome}>Welcome, {user}!</span>
            <Button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </Button>
          </>
        ) : (
          <Box className={styles.loginLinks}>
            <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
          </Box>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
