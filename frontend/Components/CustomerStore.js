import { View, Text,TextInput, StatusBar } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import CustomerNavbar from './CustomerNavbar'   
const CustomerStore = () => {
  return (
    <View style={{flex:1}}> 
      <StatusBar hidden={true}/>     
      <View style={{flexDirection:'row',marginTop:35,justifyContent:'center',}}>
        <TextInput style={{height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 296, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"/>
      
        <View style={{height: 57,borderWidth: 1, borderColor: '#BC5EB6',marginLeft:1,backgroundColor: '#F4F4F4',borderRadius:15,width:47,shadowColor: '#52006A', elevation: 20 }}>
           <MaterialIcons name="tune" size={40} color="black" style={{marginVertical:6,marginHorizontal:1}}/>
        </View>
      </View>
      <CustomerNavbar/>
    </View>
  )
}
       
export default CustomerStore