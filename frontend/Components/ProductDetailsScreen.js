// ProductDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Cart from './Cart';
function ProductDetailsScreen({ route },{navigation}) {
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
const handlePress=()=> {
  navigation.navigate()
}
  return (
    <View style={styles.fullcontainer}>
      <Text style={styles.name}>{productDetails.product_name}</Text>
      <View style={styles.container}></View>
     <View>
      <Text style={styles.description}>{productDetails.product_description}</Text>
      <Text style={styles.price}>Rs.{productDetails.product_price}</Text>
    </View>
    <View style={styles.buttonview}>
    <Button title="Add to Cart" onPress={()=>handlePress()} color="#D268CC" />
  </View>
  </View>
  );
} 

export default ProductDetailsScreen;


const styles=StyleSheet.create(
  {
    fullcontainer:{
      marginLeft: 20,
      flex:1
    },
    container: {
      left:40,
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
    },
    buttonview: {
      width: 250,
      top: 200,
      left: 65,
      justifyContent: 'center',
       
    }
    
  }
);