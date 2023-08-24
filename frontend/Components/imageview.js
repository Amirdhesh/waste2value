import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import Url from "./Url";
const ImageView = () => {
  const [imagedata, setimagedata] = useState('');

  useEffect(() => {
    fetch(`${Url()}/viewimage`)
    .then(response => response.blob()) // Convert response to Blob
    .then(data => {
      const reader = new FileReader();
      reader.onload = () => {
        setimagedata(reader.result);
      };
      reader.readAsDataURL(data);
    })
    .catch(error => console.error(error));
}, []);


  
  return (
    <View style={{padding:20,paddingBottom:40}}>
        <Text>Loding base64</Text>
        <Image
         source={{ uri: imagedata }}
        style={{ width: 100, height: 100 }}
        />
        <Text>Loading image...</Text>
      
    </View>
  );
};

export default ImageView;
