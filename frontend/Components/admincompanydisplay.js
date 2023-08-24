import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useState,useEffect } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Url from "./Url";
const Admincompanydisplay=({route,navigation})=>{
//     const {email}= route.params;
//     const [companyinfo,setCompanyInfo]= useState({});

useEffect(()=>{
    fetch(`http://192.168.56.1:3000/admin/companydetailsdisplay/${email}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        setCompanyInfo(data);
    })
    .catch((error)=>{
        console.log(error)
    })

// },[]);




    return(
      <ScrollView style={{flex:1,paddingTop:20, paddingLeft:20 ,margin:20, marginTop:70, borderColor:'black', borderWidth:2,borderRadius:20}}>
        <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontWeight: '500', fontSize:45, color:'darkblue'}}>h</Text>
        </View>
        <View style={{flexDirection:'column',paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Address: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>District: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Email id: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>LicenseNo: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Document: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        
{/* <ScrollView style={{flex:1,paddingTop:20, paddingLeft:20 ,margin:20, marginTop:70, borderColor:'black', borderWidth:2,borderRadius:20}}>
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
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>LicenseNo: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        <View style={{flexDirection:'column', paddingTop:20}}>
            <Text style={{fontWeight: '700', fontSize:20}}>Document: </Text>
            <Text style={{fontWeight: '300', fontSize:25}}></Text>
        </View>
        

      </ScrollView> */}
      </ScrollView>





    )
}

export default Admincompanydisplay;