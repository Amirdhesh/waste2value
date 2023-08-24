import { StyleSheet, View, Image,Text, TextInput,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,TouchableOpacity  } from 'react-native'
import React,{useState} from 'react'
import bgimg from "./../Assests/Frame2.png"
import { StatusBar } from 'expo-status-bar'
import Url from './Url'
const SignUp = ({navigation}) => {
  const [email,setemail]=useState("")
  const [password1,setPassword1]=useState("")
  const [password2,setPassword2]=useState("")
  const imageUri='null';
  const signup=()=>{
    if (password1==password2){
    fetch(`${Url()}/signup`,{
        method:"POST",
        headers: 
        {'Content-Type':'application/json'
    },
    body:JSON.stringify({email:email,password:password1})
  })
  .then(resp => resp.json())
  .then(data => {
    if(data=="Signup Successful"){
    navigation.navigate("Login")
    }
    console.log(data)
  })
}
  }
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
            <TextInput style={{height: 57, borderWidth: 1,fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} value={email} onChangeText={text => setemail(text)} />
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Password</Text>
            <TextInput style={{height: 57, borderWidth: 1,fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} value={password1} onChangeText={text => setPassword1(text)} />
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Confirm Password</Text>
            <TextInput style={{height: 57,fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} value={password2} onChangeText={text => setPassword2(text)} secureTextEntry={true} />
          </View>
          <TouchableOpacity onPress={()=>signup()}>
          <Text style={{ paddingVertical: 15,paddingHorizontal: 143 ,marginTop:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 20 }}>SignUp</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18,marginTop:9}}>Or</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
          <Text style={{fontSize: 21}}>Register as <Text style={{color:"#B33BAE"}} onPress={()=>navigation.navigate('Register',{imageUri:imageUri})}>Company</Text></Text>
          </TouchableOpacity>
        </View>
        </View>
        
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({})