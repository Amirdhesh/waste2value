import { View, Text,StatusBar,TextInput,TouchableWithoutFeedback,Keyboard,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { KeyboardAwareScrollView } from '../node_modules/react-native-keyboard-aware-scroll-view'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Register = ({navigation}) => {
  const [checked, setchecked] = useState(false)
  const [visible, setvisible] = useState(true)
  const [invalid, setinvalid] = useState(false)
  const [companyname, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [ph_no , setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pin, setPin] = useState('')
  const [password, setPassword] = useState('')
  const RegisterCompany=() =>{
    fetch('http://192.168.56.1:3000/company',{
      method: "POST",
      headers: 
        {'Content-Type':'application/json'},
      body:
        JSON.stringify({
          email:email,
          Companyname: companyname,
          ph_no:ph_no,
          address:address,
          pin:pin,
          password:password
        })
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      data=data.message
      if(data=="Register as user")
      {
        navigation.navigate('Signup')
      }
      else if(data=="Incorrect password")
      {
        navigation.navigate('Register')
      }
      else if(data=="Registered successfully" | data=="Already registered")
      {
        navigation.navigate('Login')
      }
    })
  }

  return (
    <KeyboardAwareScrollView
    style={{ flex:1 }}
    
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%'}}>
  <StatusBar hidden={true}/>
      <View style={{marginTop: 2}}>
            <Text style={{fontSize: 42 , fontWeight: 400, marginLeft: 0}}>Register as Company</Text>
      </View>
      <View style={{marginTop: 5}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Company Name</Text>
          <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} onChangeText={(text)=>setCompanyName(text)}/>

      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <View style={{flexDirection:'row',height: 57,alignItems:'center', borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 349, borderRadius: 9}}>
            <TextInput style={{height: 54, fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: '90%', borderRadius: 9 }} onChangeText={(text)=>setEmail(text)} />
            <AntDesign name="arrowright" size={30} color='#BC5EB6' />
            </View>
      </View>
           
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Password</Text>
            <View style={{flexDirection:'row',height: 57,alignItems:'center', borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 349, borderRadius: 9}}>
                <TextInput style={{height: 53, fontSize:22,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: '88%', borderRadius: 9 }}  secureTextEntry={visible} onChangeText={(text)=>setPassword(text)}/>
                <TouchableOpacity onPress={()=>setvisible(!visible)}>
                { visible == true ?
                <FontAwesome5 name="eye-slash" size={24} color="#B33BAE"  />
                :
                <Ionicons name="ios-eye-outline" size={30} color="#B33BAE" />
                }
                </TouchableOpacity>
            </View>
      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Address</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }}  onChangeText={(text)=>setAddress(text)}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Pincode:</Text>
            <TextInput keyboardType='numeric' style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 136, borderRadius: 9 }} onChangeText={(text)=>setPin(text)}/>
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Phone number:</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 208, borderRadius: 9 }} onChangeText={(text)=> setPhone(text)}/>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Licence No:</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 189, borderRadius: 9 }} />
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>OTP:</Text>
            <TextInput keyboardType='numeric' style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 150, borderRadius: 9 }} />
        </View>
        
      </View>
      {
        invalid===true && <Text style={{color:'red',fontSize:20}}>Invalid OTP</Text>
      }
      <View>
        <View style={{flexDirection:'row',justifyContent:'flex-start,',marginLeft:18}}>
            <BouncyCheckbox isChecked={checked} fillColor='#D268CC' style={{marginTop:5}} onPress={()=>setchecked(!checked)}/>
            <Text style={{marginTop:8,marginLeft:-10}}>I accept the <Text style={{color:"#B33BAE"}}>Terms and Condition</Text></Text>
        </View>

        <TouchableOpacity onPress={RegisterCompany}>
        <View style={{ height: 60,width: 351,shadowColor: '#52006A',margin:20, elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
           
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }} onPress={RegisterCompany}>Register</Text>
           
        </View>
        </TouchableOpacity>
      </View> 
      
      </View>
      
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    
  )
}

export default Register