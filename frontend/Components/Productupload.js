import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
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
  const {company_id} = route.params;
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
    add_product();
  }
    /*formData.append('image',{
      uri:image.path,
      type: image.mime,
      name: 'product.jpg',
    });*/
    const add_product=()=>{
    fetch(`http://192.168.56.1:3000/api/add_product/${company_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              product_name: productName,
      product_description: description,
      product_price: price,
            }),
          })
          .then(resp=>resp.json())
          .then(data => {
            console.log(data)
            navigation.navigate('CompanyStore',{ company_id:company_id })
          })
          .catch(error=>console.log(error))
           
        }
  return (
    <View style={{flex:1,}}>
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity >
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:35,marginRight:0}}>Add product</Text>
         <View></View>
        </View>
      </View>
      <View style={{height:'80%',}}>
        <View style={{flexDirection:'column',alignItems:'center',height:"45%"}}>
            <View style={{height:"100%",width:"92%",backgroundColor:'gray'}}>

            </View>
        </View>
        <View style={{height:'55%',flexDirection:'column',alignItems:'center',marginTop:7}}>
          <View style={{flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'flex-start',width:'89%'}}><Text style={{fontSize:20}}>Product Name:</Text></View>
          
      <TextInput style={{width:"92%",height:53,fontSize:20,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',borderWidth:1,borderRadius:10}}
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
    />
    <View style={{flexDirection:'row',alignItems:'center',width:'92%',marginTop:7,justifyContent:'space-between'}}>
      <View style={{width:'50%'}}>
        <Text style={{fontSize:20,left:4}}>Price:</Text>
    <TextInput style={{width:"98%",height:53,fontSize:20,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',borderWidth:1,borderRadius:10}}
        placeholder="Price"
        value={price}
        onChangeText={text => setPrice(text)}
        keyboardType="numeric"
      /></View>
      <View style={{width:'50%'}}>
        <Text style={{fontSize:20,left:4}}>Stock:</Text>
      <TextInput style={{width:"98%",height:53,fontSize:20,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',borderWidth:1,borderRadius:10}}
        placeholder="Stock"
        value={price}
        onChangeText={text => setPrice(text)}
        keyboardType="numeric"
      /></View>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',marginTop:7,justifyContent:'flex-start',width:'89%'}}><Text style={{fontSize:20}}>Product Description:</Text></View>

      <TextInput style={{width:"92%",height:150,textAlignVertical: 'top',fontSize:20,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',borderWidth:1,borderRadius:10}}
        placeholder="Type here..."
        value={description}
        multiline={true}
        onChangeText={text => setDescription(text)}
      />
      
    
      <TouchableOpacity style={{width:'92%',height:53,marginTop:20,flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,}} onPress={()=>addProduct()}> 
        <Text style={{color:'white',fontSize:20}}>Add Product</Text>
      </TouchableOpacity>
      </View>
    </View>
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


