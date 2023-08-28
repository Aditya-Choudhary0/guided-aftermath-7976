import React from 'react';
import { Box, Container } from '@chakra-ui/react';
// import Navbar from './Navbar';
// import Footer from './Footer';
import ImageSlider from './ImageSlider' ;
import OffersSection from './OffersSection';
import BestSellersSection from './BestSellersSection';
import CustomerReviewsSection from './CustomerReviewsSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  const images = [
    "https://soliloquywp.com/wp-content/uploads/2016/08/nb_15_8.gif",
    "https://oconnors.ca/wp-content/uploads/2014/04/mens-shoes-slider.jpg",
    "https://images01.nicepagecdn.com/page/50/97/website-design-preview-50972.jpg",
  ];

  return (
    <Box className={styles.homePage}>
      <Container maxW="container.lg" mt="4">

        <div className={styles.sliderContainer}>
          <ImageSlider images={images} />
        </div>

        <div className={styles.offersSection}>
          <OffersSection />
        </div>

        <div className={styles.bestSellersSection}>
          <BestSellersSection />
        </div>

        <div className={styles.customerReviewsSection}>
          <CustomerReviewsSection />
        </div>
      </Container>
    </Box>
  );
};

export default HomePage;
