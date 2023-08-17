import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import bgimg from "./../Assests/Frame1.png"  
const OTP = () => {
  return (
    <View style={{flex:1}} > 
    <StatusBar hidden={true}/>
        <View >
            <Image  resizeMode='cover' source={bgimg} />
        </View>
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center' ,}}>
            
            <Text style={{fontSize:17,width:'68%',textAlign:'center',marginTop:30}}>Please enter the OTP that have been sent to your email address. </Text>
          <View>
            
            <TextInput style={{height: 55, fontSize:22,paddingLeft:10,borderWidth: 1,marginTop:30, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 250, borderRadius: 9 }}  secureTextEntry={true} />
            <View style={{flexDirection:'row' ,justifyContent:'flex-end'}}>
            </View>
          </View>
          <Text style={{ paddingVertical: 9,paddingHorizontal: 90 ,marginTop:30, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 29 }}>
            Verify
          </Text>
        </View>
    </View>
  )
}

export default OTP