import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export function AddProductScreen({navigation}){
   
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image,setImage] = useState(null);
  const pickImage=() => {
    ImagePicker.showImagePicker({title: 'Select Product Image'},response=>
    {
      if(!response.didCancel && !response.error){
        setImage(response);
      }
    });
  };
  
  const addProduct=()=>{
    navigation.navigate("ProductAdded");
    const formData =new FormData();
    formData.append('product_name',productName);
    formData.append('product_description',description);
    formData.append('product_price',price);
    formData.append('image',{
      uri:image.uri,
      type: image.type,
      name: 'product.jpg',
    });
    fetch('http://192.168.56.1:3000/api/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
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
      <Button title="Pick Product Image" onPress={pickImage}/>
      {image && (
        <Image source={{uri: image.uri}} style={styles.imagePreview}/>
      )}
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

