import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import styles from './bestSellers.module.css';

const BestSellersSection = () => {
  const bestSellers = [
    {
        "id": 17,
        "name": "ProRun Marathon Shoes",
        "brand": "MarathonMasters",
        "price": 139.99,
        "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS6qCcTq2uuiEJ3P0U_S5ldBjuKVo0xtWLA&usqp=CAU",
        "gender": "Men",
        "type": "Marathon Shoes",
        "rating": 4.9,
        "review": 182,
        "bestFor": ["Long Distance Running", "Race Training"],
        "features": [
          "Lightweight design",
          "Carbon fiber plate for energy return",
          "Responsive cushioning",
          "Breathable mesh upper",
          "Lace-up closure"
        ]
      },
      {
        "id": 18,
        "name": "GlamourGlide Evening Heels",
        "brand": "Elegance",
        "price": 109.99,
        "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBLwUuko49wEjbtuc6Y9lgZJ8UKtrRmJaCN3pMilXABcdS096d-3DsWqQLOPw8KgzN-U&usqp=CAU",
        "gender": "Women",
        "type": "Evening Heels",
        "rating": 4.5,
        "review": 148,
        "bestFor": ["Formal Events", "Evening Outfits"],
        "features": [
          "Shiny faux leather upper",
          "High stiletto heel",
          "Cushioned insole",
          "Pointed toe",
          "Slip-on style"
        ]
      },
      {
        "id": 19,
        "name": "RuggedTrail Outdoor Sandals",
        "brand": "OutVenture",
        "price": 84.99,
        "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcdRxdt577b3HY2vJQis2c8rNUhOt3Tv1qg&usqp=CAU",
        "gender": "Unisex",
        "type": "Outdoor Sandals",
        "rating": 4.6,
        "review": 112,
        "bestFor": ["Hiking", "Water Activities"],
        "features": [
          "Durable synthetic straps",
          "Adjustable hook-and-loop closures",
          "Cushioned footbed with arch support",
          "Shock-absorbing midsole",
          "Lugged rubber outsole"
        ]
      }
  ];

  return (
    <Box className={styles.bestSellersSection}>
      <Heading className={styles.bestSellersHeading} size="lg" mb="4">
        Best Sellers
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
        {bestSellers.map(product => (
          <Box key={product.id} className={styles.productCard}>
            <Image className={styles.productImage} src={product.images} alt={product.name} />
            <Box className={styles.productInfo}>
              <Text className={styles.productName} fontWeight="semibold">
                {product.name}
              </Text>
              <Text className={styles.productPrice} color="gray.500">
                Price : ${product.price}
              </Text>
              <Text className={styles.productRating} color="gray.500">
                Rating : {product.rating} stars ({product.review} reviews)
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BestSellersSection;