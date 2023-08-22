import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Cart from './Cart';
function ProductDetailscompany({ route,navigation}) {
  const {customer_id, product_id} = route.params;
  const [productDetails, setProductDetails] = useState({});
  const deleteproduct=(()=>{
    fetch(`http://192.168.56.1:3000/api/delete_product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product_id,
      }),
      
    })
    .then((response) => response.json())
    .then((data) => {
      navigation.navigate("CompanyStore",{customer_id});
      // Handle success or error response from the API
    })
    .catch((error) => {
      console.error(error);
    });
  })
  useEffect(() => {
    fetch(`http://192.168.56.1:3000/api/selectedproduct/${product_id}`)
    
      .then((response) => {
        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [product_id]);

  return (
    <View style={styles.fullcontainer}>
      <Text style={styles.name}>{productDetails.product_name}</Text>
      <View style={styles.container}></View>
     <View>
      <Text style={styles.description}>{productDetails.product_description}</Text>
      <Text style={styles.price}>Rs.{productDetails.product_price}</Text>
    </View>
    <View style={styles.buttonview}>
    <Button title="Delete Product" onPress={()=>deleteproduct()} color="#D268CC" />
  </View>
  </View>
  );
} 

export default ProductDetailscompany;


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