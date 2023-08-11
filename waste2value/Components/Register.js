import { View, Text,StatusBar,TextInput, } from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
const Register = () => {
  const [checked, setchecked] = useState(false)
  return (
    <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <StatusBar hidden={true}/>
      
      <View style={{marginTop: 2}}>
            <Text style={{fontSize: 42 , fontWeight: 400, marginLeft: 0}}>Register as Company</Text>
      </View>
      <View style={{marginTop: 5}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Company Name</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>

      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
      </View>
           
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Password</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Address</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Pincode:</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 136, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Area:</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 208, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Upload:</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 189, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>OTP:</Text>
            <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 150, borderRadius: 9 }} placeholder="Type here..." placeholderTextColor="white"/>
        </View>
        
      </View>
      <View style={{flex:1 }}>
        <View style={{flexDirection:'row',justifyContent:'flex-start,',marginLeft:18}}>
            <BouncyCheckbox isChecked={checked} fillColor='#D268CC' style={{marginTop:5}} onPress={()=>setchecked(!checked)}/>
            <Text style={{marginTop:8,marginLeft:-10}}>I accept the <Text style={{color:"#B33BAE"}}>Terms and Condition</Text></Text>
        </View>

        <View style={{flexDirection:'row',alignItems: 'center',margin:20}}>
            <Text style={{ paddingVertical: 15,paddingHorizontal: 143 , backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 500, fontSize: 20 }}>SignUp</Text>
        </View>
      </View> 
      
    </View>
    
  )
}

export default Register