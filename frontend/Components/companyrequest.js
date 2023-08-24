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
 const handlePress=(id)=>
 {
  navigation.navigate('Companydetailsdisplay',{id});
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
        <View style={{borderColor:'#F4F4F4',borderWidth:2, borderRadius:12, height:90, backgroundColor:'ghostwhite', elevation:10}}>
        <Text style={{fontSize:28, fontWeight:"600"}} onPress={()=>handlePress(item.id)}>Company Name: {item.company_name}</Text>
        <Text style={{fontSize:24,color:"green"}} onPress={()=>handlePress(item.id)}>Address: {item.address}</Text>
        </View>
      </View>
  )
return (
        
      <View style={{marginTop:35}}>
        <View style={{flexDirection:'row', marginTop:20,marginLeft:20,alignItems:'center',height: 57 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 300, borderRadius: 20 }}>
        <Ionicons name="search" placeholder="Search Pending request with company name" size={30} color="black" style={{width:'10%',marginLeft:5}}/>
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize:20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"/>
        </View>
        <View style={{marginTop:20 ,marginLeft:20, width:500}}>
          {
            companydata.length !=0&&
           <FlatList
      data={companydata}
      renderItem={renderItem}
      keyExtractor={item => ( item.id)}
      numColumns={1}
    />
          }
    </View>
        </View>
        )
        
        }
export default CompanyRequest;
