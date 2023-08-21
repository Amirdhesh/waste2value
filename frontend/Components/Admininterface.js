import { StyleSheet, View, Image,Text, TextInput, TouchableOpacity, KeyboardAvoidingView ,TouchableWithoutFeedback,Keyboard, ScrollView} from 'react-native'
import React,{useState} from 'react'
import bgimg from "./../Assests/Frame1.png"
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Admininterface = ({route,navigation}) => {
    const {admin_id} = route.params;  
    return(
    <View style={{flex:1}}>
        <Text style={{fontSize:20}}>Admin</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Companyrequest')}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>Pending request</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('adminallcompany',{ admin_id:admin_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Copmanys </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Adminuserdetialsdispaly")}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Users</Text>
    </TouchableOpacity>
    </View>
    )
}
export default Admininterface 
const styles = StyleSheet.create({})