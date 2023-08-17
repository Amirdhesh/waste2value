import { StyleSheet, View, Image,Text, TextInput,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback  } from 'react-native'
import React from 'react'
import bgimg from "./../Assests/Frame2.png"
import { StatusBar } from 'expo-status-bar'
const SignUp = ({navigation}) => {
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
        <View style={{flexDirection: 'column',alignItems: 'center' ,position:'absolute',top:408,paddingLeft:20}}>
          <View style={{marginTop: 0}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <TextInput style={{height: 57, borderWidth: 1,fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }}  />
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Password</Text>
            <TextInput style={{height: 57, borderWidth: 1,fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Confirm Password</Text>
            <TextInput style={{height: 57,fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }}  secureTextEntry={true} />
          </View>
          
          <Text style={{ paddingVertical: 15,paddingHorizontal: 143 ,marginTop:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 20 }}>SignUp</Text>
          <Text style={{fontSize: 18,marginTop:9}}>Or</Text>
          <Text style={{fontSize: 21}}>Register as <Text style={{color:"#B33BAE"}} onPress={()=>navigation.navigate('Register')}>Company</Text></Text>
        </View>
        </View>
        
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({})