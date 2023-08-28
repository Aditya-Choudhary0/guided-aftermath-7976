import React, { useState } from 'react';
import { Box, Image, Heading, Text, Button, Flex, Spacer } from '@chakra-ui/react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Image src={product.images} alt={product.name} />
      <Heading size="md" mt="2">
        {product.name}
      </Heading>
      <Text>Brand: {product.brand}</Text>
      <Text>Rating: {product.rating} stars</Text>
      <Text>Price: ${product.price}</Text>
      <Button mt="2" colorScheme="cyan" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
