import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
//import ImagePicker from 'react-native-image-crop-picker';

export function AddProductScreen({navigation}){
   
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  /*const [image,setImage] = useState(null);
  const pickImage=() => {
    ImagePicker.openPicker({
      mediaType: 'photo',
    })
    .then(response => {
      if(!response.didCancel && !response.error){
        setImage(response);
      }
    })
    .catch(error=> {
      console.log(error);
    })
  };*/
  
  const addProduct=()=>{
    navigation.navigate("ProductAdded");
    const formData ={
      product_name: productName,
      product_description: description,
      product_price: price,
    };
    /*formData.append('image',{
      uri:image.path,
      type: image.mime,
      name: 'product.jpg',
    });*/
    console.log(formData);
    fetch('http://192.168.56.1:3000/api/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(resp=>resp.json())
          .then(data => {
            console.log(data)
            navigation.navigate("ProductAdded")
          })
          .catch(error=>console.log(error))
           
        }
  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Add Product</Text>
      <TextInput style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
      />
      <TextInput style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={text => setPrice(text)}
        keyboardType="numeric"
      />
    
      <Button style={styles.button}title="Add Product" onPress={addProduct} />
    </View>
  );
}

export default AddProductScreen;
const styles = StyleSheet.create({

  container1: {
    alignItems: 'center',
    flex: 1,
    top: 150
  },
  header:{
    fontSize: 23
  },
  input:{
    top:1,
    fontSize: 23
  },
  imagePreview: {
    width: 200,
    height:200,
    marginTop:10,
  }
});

