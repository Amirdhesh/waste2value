import React from "react";
import { Text,StyleSheet,View, TouchableOpacity} from "react-native";
import Url from "./Url";
import { Button } from "react-native-elements";
const ContributeWaste=({route,navigation})=>{
    const {customer_id} = route.params;
    console.log(customer_id);
    const contribute=() =>{
        const {imageUri} = route.params;
        const {customer_id} = route.params;
        console.log(imageUri);
        let formdata = new FormData();
        formdata.append("customer_id", customer_id)
        formdata.append("status", "pending")
        if (imageUri!='null'){
        console.log("sdvwvgwe"+imageUri);
        formdata.append("image", {uri: imageUri, name: 'image.jpg', type: 'image/jpeg'})
        console.log(formdata)
      fetch(`${Url()}/contribute`,{
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formdata,
        })
        .then((response)=> response.json())
        .then((data)=>{
          if (data=='Susses'){
          console.log("Sucess")
          navigation.navigate("Contribute",{customer_id})
          }
          else{
            console.log("No plastic deteceted")
          }
          })
        .catch(err => {
          console.log(err)
})
      }
    }
    return(
        <View style={{flex:1 ,justifyContent:"center", alignContent:'center',padding:50}} >
            <TouchableOpacity onPress={()=>navigation.navigate("ContributeImageUplode",{customer_id:customer_id})}>
            <Text>Uplode image</Text>
            </TouchableOpacity>
            <Button   title='Send' onPress={()=>contribute()}/>
        </View>
    )
}

export default ContributeWaste;