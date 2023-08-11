import { StyleSheet, View, Image,Text, TextInput,  } from 'react-native'
import React from 'react'
import bgimg from "./../Assests/Frame2.png"
import { StatusBar } from 'expo-status-bar'
const SignUp = () => {
  return (
    
    <View style={{flex:1}} > 
    <StatusBar hidden={true}/>
        <View >
            <Image  resizeMode='cover' source={bgimg} />
        </View>
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center' ,}}>
          <View style={{marginTop: 0}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Password</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." secureTextEntry={true} placeholderTextColor="white"/>
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Confirm Password</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }}  secureTextEntry={true} />
          </View>
          
          <Text style={{ paddingVertical: 15,paddingHorizontal: 143 ,marginTop:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 20 }}>SignUp</Text>
          <Text style={{fontSize: 18,marginTop:9}}>Or</Text>
          <Text style={{fontSize: 21}}>Register as <Text style={{color:"#B33BAE"}}>Company</Text></Text>
        </View>
        
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})