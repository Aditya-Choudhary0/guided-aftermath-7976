import React, { useState, useEffect } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@oxygen-ui/react-icons';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative">
      <Image src={images[currentImageIndex]} alt="Image Slider" h="300px" w="100%" objectFit="cover" />
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={goToPreviousImage}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        bg="gray.800"
        color="white"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={goToNextImage}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        bg="gray.800"
        color="white"
      />
    </Box>
  );
};

export default ImageSlider;
