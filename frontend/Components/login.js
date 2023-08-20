import { StyleSheet, View, Image,Text, TextInput, TouchableOpacity, KeyboardAvoidingView ,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import bgimg from "./../Assests/Frame1.png"
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Login = ({navigation}) => {
  const [visible, setvisible] = useState(true)
  const [invalid, setinvalid] = useState(false)
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")
  const login=()=>{
    console.log('Trying to login');
    fetch("http://192.168.56.1:3000/login",{
        method:"POST",
        headers: 
        {'Content-Type':'application/json'
    },
    body:JSON.stringify({email:email,password:password})
  })
  .then(resp => resp.json())
  .then(data => {
    if(data.message=="Login Successful"){
    navigation.navigate("ProductList",{customer_id:data.customer_id})
    }
    else if(data.message=="company"){
      navigation.navigate("Companyinterfase",{company_id:data.customer_id})
    }
    else if (data.message=="admin") {
      navigation.navigate("CustomerStore")
    }
    console.log(data)
    
    
  })
  .catch(error => console.log(error))
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
        <View style={{flexDirection: 'column',alignItems: 'center' ,position:'absolute',top:450,}}>
          <View style={{margin: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <TextInput keyboardType='email-address' style={{height: 57,fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} value={email}onChangeText={text => setemail(text)}/>
          </View>
          <View>
            <Text style={{fontSize: 26, fontWeight: 400, marginLeft: 2}}>Password</Text>
            <View style={{flexDirection:'row',height: 57,alignItems:'center', borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 349, borderRadius: 9}}>
                <TextInput style={{height: 53, fontSize:22,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: '88%', borderRadius: 9 }}  secureTextEntry={visible} value={password}onChangeText={text => setPassword(text)}/>
                <TouchableOpacity onPress={()=>setvisible(!visible)}>
                { visible == true ?
                <FontAwesome5 name="eye-slash" size={24} color="#B33BAE"  />
                :
                <Ionicons name="ios-eye-outline" size={30} color="#B33BAE" />
                }
                </TouchableOpacity>
            </View>
            {invalid===true && <Text style={{color:'red',fontSize:20}}>Invalid Email or Password</Text>}
            <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              {invalid===false && <View></View>}
            {invalid===true && <Text style={{color:'red',fontSize:20}}>Invalid Email or Password</Text>}
              <Text style={{color:'blue',fontSize:17}}>Forget Password?</Text>
            </View>
          </View>
          <TouchableOpacity onPress={()=>login()}>
          <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 29 }}>Login</Text>
          </TouchableOpacity>
          <Text>Or</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
          <Text style={{fontSize: 25}}>Create new <Text style={{color:"#B33BAE",}} onPress={()=>navigation.navigate('SignUp')} >Account</Text></Text>
          </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({})