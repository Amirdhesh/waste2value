import { StyleSheet, View, Image,Text, TextInput, TouchableOpacity, KeyboardAvoidingView ,TouchableWithoutFeedback,Keyboard, ScrollView} from 'react-native'
import React,{useState} from 'react'
import bgimg from "./../Assests/Frame1.png"
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Companyinterfase = ({route,navigation}) => {
    const {company_id} = route.params;  
    return(
    <View style={{flex:1}}>
        <Text style={{fontSize:20}}>Company</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Product',{ company_id:company_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>Add Product</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('CompanyStore',{ company_id:company_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Product</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Comapnyorderdetails',{ company_id:company_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Orders</Text>
    </TouchableOpacity>
    </View>
    )
}
export default Companyinterfase 
const styles = StyleSheet.create({})