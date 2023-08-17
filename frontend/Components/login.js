import { StyleSheet, View, Image,Text, TextInput,  } from 'react-native'
import React from 'react'
import bgimg from "./../Assests/Frame1.png"
import { StatusBar } from 'expo-status-bar'
import { Button } from 'react-native-elements'
export function Login  ({navigation}) {
  return (
    
    <View style={{flex:1}} > 
    <StatusBar hidden={true}/>
        <View >
            <Image  resizeMode='cover' source={bgimg} />
        </View>
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center' ,}}>
          <View style={{margin: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Password</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." secureTextEntry={true} placeholderTextColor="white"/>
          </View>
          
          <Button style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 29 }}
          title ="Login"
        onPress={() => navigation.navigate("Details")}></Button>
          <Text>Or</Text>
          <Text style={{fontSize: 25}}>Create new <Text style={{color:"#B33BAE"}}>Account</Text></Text>
        </View>
        
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})