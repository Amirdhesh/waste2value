import React from "react";
import { Text,StyleSheet,View, TouchableOpacity} from "react-native";
import Url from "./Url";
import { Button } from "react-native-elements";
import { Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
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
          if (data=='Success'){
          console.log("Success")
          navigation.navigate("UserContribution",{customer_id})
          }
          else{
            Alert.alert("No Plastic detected","",[{text:"Okay"}])
          }
          })
        .catch(err => {
          console.log(err)
})
      }
    }
    return(
       /* <View style={{flex:1 ,justifyContent:"center", alignContent:'center',padding:50}} >
            <TouchableOpacity onPress={()=>navigation.navigate("ContributeImageUplode",{customer_id:customer_id})}>
              <View style={{height:40,width:90,backgroundColor:'pink',borderColor:'pink',borderWidth:2}}>
            <Text>Uplode image</Text>
            </View>
            </TouchableOpacity>
            <Button   title='Send' onPress={()=>contribute()}/>
        </View>*/
        <View style={{flex:1,justifyContent:'center',borderColor:'black',borderWidth:2,margin:50,borderRadius:20,alignItems:'center'}}>

        <TouchableOpacity onPress={()=>navigation.navigate("ContributeImageUplode",{customer_id:customer_id})}  style={{flexDirection:"row",justifyContent:'center',alignItems:'center',height:90,width:250, backgroundColor:"#D268CC", borderColor:"#D268CC",borderWidth:2,borderRadius:12,elevation:20,shadowColor:'red'}}>
                  <AntDesign name="upload" size={28} color="white" />

                <Text style={{fontSize:28,marginLeft:8,fontWeight:600,color:'white'}}>Upload Image</Text>
           
        </TouchableOpacity>
        <View style={{top:20,justifyContent:'center'}}>
        <Button title='Send' onPress={()=>contribute()}/>
        </View>
    </View>
    )
}

export default ContributeWaste;