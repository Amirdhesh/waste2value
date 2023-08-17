import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import bgimg from "./../Assests/Frame1.png"  
const ForgetPassword = () => {
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior="position"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
    <StatusBar hidden={true}/>
      
        <View >
            <Image  resizeMode='cover' source={bgimg} />
        </View>
        <View style={{flexDirection: 'column',alignItems: 'center' ,position:'absolute',top:450,}}>
            <Text style={{fontSize:26,color:'#C96FC4'}}>Forget Password?</Text>
            <Text style={{fontSize:17,width:'80%',textAlign:'center'}}>Please enter the email address you used to create your account, and we'll send you a OTP to reset your password. </Text>
            <View style={{margin: 5}}>
            <Text style={{fontSize: 22 , fontWeight: 400, marginLeft: 2,}}>Email</Text>
            <TextInput style={{height: 55, fontSize:22,paddingLeft:10,borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 337, borderRadius: 9 }} />
          </View>
          <View>
            <Text style={{fontSize: 22, fontWeight: 400, marginLeft: 2}}>New Password</Text>
            <TextInput style={{height: 55, fontSize:22,paddingLeft:10,borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 337, borderRadius: 9 }}  secureTextEntry={true} />
            <View style={{flexDirection:'row' ,justifyContent:'flex-end'}}>
            </View>
          </View>
          <Text style={{ paddingVertical: 9,paddingHorizontal: 132 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 29 }}>
            Reset
          </Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ForgetPassword