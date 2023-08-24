import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useState,useEffect } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
const Companydetailsdisplay=({route,navigation})=>{
    const {email}= route.params;
    const [companyinfo,setCompanyInfo]= useState({});

useEffect(()=>{
    fetch(`http://192.168.56.1:3000/admin/companydetailsdisplay/${email}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log('Data: ',data)
        setCompanyInfo(data);
        console.log(companyinfo);
    })
    .catch((error)=>{
        console.log(error)
    })

},[]);

const AcceptingOffer=()=>{
    fetch(`http://192.168.56.1:3000/admin/acceptRequest/${email}`,{
        method:'POST'
    })
    .then((response)=>response.json())
    .then((data)=>{console.log(data)
    navigation.navigate('Companyrequest');
})
    .catch((error)=>console.error(error))
}

const DecliningOffer=()=>{
    fetch(`http://192.168.56.1:3000/admin/declineRequest/${email}`,{
        method:'POST'
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        navigation.navigate('Companyrequest');
    })
    .catch((error)=>console.error(error))
}




    return(
      <ScrollView style={{flex:1,paddingTop:20, paddingLeft:20 ,margin:20, marginTop:70, borderColor:'black', borderWidth:2,borderRadius:20}}>
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
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>Alert.alert('Accept','Admit the company to sell products through the company?',[{text: "Yes", onPress:()=>AcceptingOffer()},{text: "No"}])}>
        <View style={{ height: 50,width: 100,shadowColor: '#52006A',margin:20, elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>accept</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert('Decline','Decline the company to sell products through the company?',[{text: "Yes", onPress:()=>DecliningOffer()},{text: "No"}])}>
        <View style={{ height: 50,width: 100,shadowColor: '#52006A',margin:20, elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>decline</Text>
        </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    )
}

export default Companydetailsdisplay;