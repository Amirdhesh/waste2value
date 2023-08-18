// ProductDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function ProductDetailsScreen({ route }) {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`http://192.168.56.1:3000/api/selectedproduct/${productId}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [productId]);

  return (
    <View>
      <Text>Product Details</Text>
      <Text>Name: {productDetails.product_name}</Text>
      <Text>Description: {productDetails.product_description}</Text>
      <Text>Price: {productDetails.product_price}</Text>
    </View>
  );
}

export default ProductDetailsScreen;
