import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {useState, useEffect} from "react";
import { Button } from "react-native-elements";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Url from "./Url";
import Admininterface from "./Admininterface";
const CompanyRequest=({navigation})=>{
   
  const [companydata,setcompanydata] = useState({});
   useFocusEffect(
    useCallback(() => {
      CompanyData();
    }, [])
  );

  const CompanyData=async()=>
  {
    console.log("Function called");
    fetch(`${Url()}/admin/companyrequest`)
    .then((response)=>response.json())
    .then((data)=>{
      setcompanydata(data)
      console.log(data)
        })
  }
 const handlePress=(email)=>
 {
  navigation.navigate('Companydetailsdisplay',{email});
 }

  const renderItem =({item})=>
  (
    <View style={{
      flex: 1,
      width:350,
      justifyContent: 'center',
      alignItems: 'left',
      marginTop:12,
      }}>
        <View style={{borderColor:'#F4F4F4',borderWidth:2, borderRadius:12, height:120, backgroundColor:'ghostwhite', elevation:3}}>
        <Text style={{fontSize:25, fontWeight:"500",paddingLeft:8}} onPress={()=>handlePress(item.email)}>Company Name: {item.company_name}</Text>
        <Text style={{fontSize:24,color:"green",paddingLeft:8}} onPress={()=>handlePress(item.email)}>Address: {item.address}</Text>
        </View>
      </View>
  )
return (
        
     
        
        <View style={{marginTop:20 ,flex:1,alignItems:"center"}}>
         
           <FlatList
      data={companydata}
      renderItem={renderItem}
      keyExtractor={item => ( item.email)}
      numColumns={1}
    />
          
    <Admininterface navigation={navigation} />

    </View>
        
        
        )
        
        }
export default CompanyRequest;
