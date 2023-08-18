// ProductDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
function ProductDetailsScreen({ route }) {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`http://192.168.56.1:3000/api/selectedproduct/${productId}`)
      .then((response) => {
        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [productId]);

  return (
    <View>
      <Text style={styles.name}>{productDetails.product_name}</Text>
      <View style={styles.container}></View>
      <Text style={styles.description}>{productDetails.product_description}</Text>
      <Text style={styles.price}>Price: {productDetails.product_price}</Text>
    <View style={styles.buttonContainer}>
    <Button title="Add to Cart" />
    <Button title="Add to Wishlist" />
  </View>
  </View>
  );
} 

export default ProductDetailsScreen;


const styles=StyleSheet.create(
  {
    container: {
      left: 70,
      height:300,
      width: 278,
      borderRadius: 10,
      backgroundColor: "grey"
    }, 
    name: {
      fontSize:38,
      fontWeight: 'bold',
      marginBottom:16
    },
    description: {
      top:20,
      fontSize: 23,
    },
    price: {
      top:60,
      fontSize: 20,
      color:'green'
    }
  }
);