import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
const CompanyRequest=()=>{
return (

      <View style={{flexDirection:'row',marginTop:35,justifyContent:'center',height:"8%"}}>
        <View style={{flexDirection:'row',alignItems:'center',height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 296, borderRadius: 20 }}>
        <Ionicons name="search" placeholder="Search Pending request with company name" size={30} color="black" style={{width:'10%',marginLeft:5}}/>
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize:20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"/>
        </View>
        </View>
        )
        



        }
export default CompanyRequest;
