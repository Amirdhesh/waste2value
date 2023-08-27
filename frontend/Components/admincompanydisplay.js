import React from "react";
import { ScrollView, Text, View,StatusBar } from "react-native";
import { useState,useEffect } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Url from "./Url";
import { MaterialIcons } from '@expo/vector-icons'; 
const Admincompanydisplay=({route,navigation})=>{
    const {email}= route.params;
    const [companyinfo,setCompanyInfo]= useState({});

useEffect(()=>{
    fetch(`${Url()}/admin/companydetailsdisplay/${email}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        setCompanyInfo(data);
    })
    .catch((error)=>{
        console.log(error)
    })

},[]);




    return(
        <View style={{flex:1}}>
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:40,marginRight:30}}>UserDetail</Text>
         <View></View>
        </View>
      </View>
      <View style={{flex:1, paddingLeft:20 ,margin:20, marginTop:20, borderColor:'black', borderWidth:2,borderRadius:20}}>
        <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontWeight: '500', fontSize:45, color:'darkblue'}}>{companyinfo.company_name}</Text>
        </View>
        <View style={{flexDirection:'column',paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Address: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}>{companyinfo.address}</Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>District: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}>{companyinfo.district}</Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Email id: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}>{companyinfo.email}</Text>
        </View>
        

      </View>
      </View>
    )
}

export default Admincompanydisplay;