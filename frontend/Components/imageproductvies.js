import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import Url from "./Url";
const ImageProductView = () => {
  const [imagedata, setimagedata] = useState([]);

  useEffect(() => {
    fetch(`${Url()}/viewproductimage`)
    //.then(response => response.blob()) // Convert response to Blob
    .then(data => {

    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setimagedata(reader.result);
    //   };
    //   reader.readAsDataURL(data);
    setimagedata(data);
    })
    .catch(error => console.error(error));
}, []);
  console.log(imagedata)

  
  return (
    <View style={{padding:20,paddingBottom:40}}>
        <Text>Loding base64</Text>
        {imagedata.map((imageBase64,index)=>(
        <Image
        key={index}
         source={{ uri: imageBase64 }}
         style={{ width: 100, height: 100 }}
        />
        ))}
        <Text>Loading image...</Text>
    </View>
  );
};

export default ImageProductView;
