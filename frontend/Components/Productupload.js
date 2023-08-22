import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
//import { launchImageLibrary } from 'react-native-image-picker';
//var ImagePicker = require('react-native-image-picker');
//import DocumentPicker from 'react-native-document-picker';
//import ImagePicker from 'react-native-image-crop-picker';
/*const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};*/
export function AddProductScreen({route , navigation}){
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const {customer_id} = route.params;
  console.log(customer_id);
  //test image
  const [photo, setPhoto] = React.useState(null);

  /*const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  //test image close 
  const [image,setImage] = useState(null);
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
  /*const selectDoc = async () => {
    try {
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickSingle()
      const doc = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
      })
      console.log(doc)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) 
        console.log("User cancelled the upload", err);
      else 
        console.log(err)
    }
  }*/
  const addProduct=async()=>{
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
    fetch(`http://192.168.56.1:3000/api/add_product/${customer_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(resp=>resp.json())
          .then(data => {
            console.log(data)
            navigation.navigate('CompanyStore',{ customer_id:customer_id })
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
    //image upplode check
    /*
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      < Button onPress = {
  () =>
  ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
    (response) => {
      console.log(response);
      this.setState({
        resourcePath: response
      });
    },
  )
}
title = "Select Image" / >
    </View>
*/

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

