import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider' ;
import OffersSection from './OffersSection';
import BestSellersSection from './BestSellersSection';
import CustomerReviewsSection from './CustomerReviewsSection';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" mt="4">
        {/* Image Slider */}
        <ImageSlider />

        {/* Offers Section */}
        <OffersSection />

        {/* Best Sellers Section */}
        <BestSellersSection />

        {/* Customer Reviews Section */}
        <CustomerReviewsSection />
      </Container>
      <Footer />
    </Box>
  );
};

export default HomePage;
