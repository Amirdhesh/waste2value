import React from 'react';
import { View,Text, TouchableOpacity, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput, configureFonts } from 'react-native-paper';


const ProvideCoins=({navigation,route})=>{
    const [otp,setOtp]=useState(0);
    const {contribution_id,company_id,coins} = route.params;

    const handleConfirmPay=()=>{
        Alert.alert("Proceed to send coins ","",[{text:"Yes", onPress:()=>ConfirmPay()},{text:"No"}])
    }

    const ConfirmPay=()=>{
        fetch(`http://192.168.56.1:3000/api/sendcoins/`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_id:company_id,
                contribution_id:contribution_id,
                coins:coins
            })
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))

        navigation.navigate("Contribution",{company_id});
    }
    return(
        <View style={{flex:1,margin:20,paddingTop:30}}>
           
            <View style={{top:20,borderColor:'black', borderWidth:3,padding:20,borderRadius:12}}>
                <Text style={{fontSize:30,paddingBottom:20}}> Enter OTP sent to phonenumber </Text>
                <TextInput placeholder='Enter OTP' style={{height:60  , width: 300, borderWidth:2, borderColor:'grey' }} onChangeText={(text)=>setOtp(text)}/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center', top:200}}>
                <TouchableOpacity onPress={()=>handleConfirmPay()}>
                    <View style={{height:100,width:200,justifyContent:'center',alignItems:'center' , borderWidth:2,borderRadius:12, backgroundColor:'pink', borderColor:'deeppink', elevation:12,shadowColor:'deeppink'}}>
                        <Text>
                            Confirm to Pay
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProvideCoins;