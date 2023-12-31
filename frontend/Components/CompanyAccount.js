import { View, Text,TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomerNavbar from './CustomerNavbar';
import { Alert } from 'react-native';
import Companyinterface from './Companyinterface';
import Url from './Url';
const Account = ({route,navigation}) => {
    const [name, setname] = useState('unknown') 
    const [logout, setlogout] = useState(false)
    const [type, settype] = useState(false)
    const [coins,setcoins] = useState(0);
    const {company_id} = route.params;
    const getcoins=()=>{
      fetch(`${Url()}/api/getcoins/${company_id}`)
      .then((response)=>response.json())
      .then((data)=>{
        setcoins(data);
        console.log(coins);
      })
      .catch((error)=>{
        console.error(error);
      })
      if(coins)
      return coins;
    else
    return 0;
    }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();
    settype(false)}} >
    <View style={{flex:1,     backgroundColor: logout === true ? 'rgba(0,0,0,0.5)' : 'transparent'}}>
  
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor:logout===true?'rgba(0,0,0,0.5)': '#BC5EB6',backgroundColor: logout === true ? 'transparent' :'#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: logout===true?null:'#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:43,}}>Account</Text>
        
    <TouchableOpacity onPress={()=>Alert.alert("Logout of account","",[{text:"Logout", onPress:()=>navigation.navigate("Login")},{text:"Cancel"}])}>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor:logout===true?'rgba(0,0,0,0.5)': '#BC5EB6',backgroundColor: logout === true ? 'transparent' :'#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: logout===true?null:'#52006A', elevation: 20}}>
        <MaterialIcons name="logout" size={30} color="black" />
      </View>
    </TouchableOpacity>
      </View>
      </View>
      <View style={{flex:1,alignItems:'center',}}>
      
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:230,height:230,marginTop:2,borderRadius:200,      backgroundColor: logout === true ? 'transparent' : '#D9D9D9'}}>
          <MaterialCommunityIcons name="account" size={200} color={ logout === true ? 'rgba(0,0,0,0.2)' : 'white'} />
        </View>
        
        <View style={{flexDirection:'row',alignItems:'center',marginTop:8}}>
          {type===false?<Text style={{fontSize:26}}>
                {name}</Text>:<TextInput style={{width:'50%',height:40,fontSize:20,borderBottomWidth:1,paddingLeft:5,borderBottomColor:'#C96FC4'}} onChangeText={(inputText)=>setname(inputText)} value={name}/>
            }
            
            <View  style={{marginLeft:5,height:23,width:20,backgroundColor:'#C96FC4',alignItems:'center',justifyContent:'center',borderRadius:5}}>
              <TouchableOpacity onPress={()=>settype(!type)}>
              <MaterialIcons name="edit" size={15} color="white" />
              </TouchableOpacity>
              
            </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
            <Text style={{fontSize:30,color:'#3A3838'}}> 
              Wallet:{getcoins()}<Text >
            </Text>
            </Text>
            <FontAwesome5 name="coins" size={24} color="gold" style={{marginLeft:3}} />
        </View>
        {
          logout===true && 
          <View style={{position:'absolute',borderRadius:10,height:'25%',backgroundColor:"white",elevation:20,shadowColor: '#52006A',borderWidth:1,width:"50%",bottom:350}}>
            <View style={{flexDirection:'column',width:"100%",alignItems:"center",height:'100%'}}>
            <View style={{height:"40%",width:"100%",flexDirection:'column',justifyContent:"center"}}>
              <Text style={{fontSize:22,textAlign:'center',}}>Log out of your account?</Text>
              </View>              
              <View style={{height:"30%",width:"100%",borderTopWidth:1,flexDirection:'column',justifyContent:"center"}}>
              <Text style={{fontSize:18,textAlign:'center',color:"red"}} onPress={()=>navigation.navigate("Login")}>Log Out</Text>
              </View>
              <View style={{height:"30%",width:"100%",borderTopWidth:1,flexDirection:'column',justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>setlogout(false)}>
                <Text style={{fontSize:18,textAlign:'center',color:"red"}}>Cancel</Text>
                </TouchableOpacity>
                
              </View>
          </View>

          </View> 
        }
        
        <TouchableOpacity onPress={() => navigation.navigate("CompanyWallet",{company_id:company_id})} style={{height:'5%',flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,alignItems:'center',justifyContent:'space-between',width:'92%',height:'10%',marginTop:0}}>
            <Text style={{fontSize:25,marginLeft:8}}>
               Wallet
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={48} color={ logout === true ? 'rgba(0,0,0,0.2)' : "#C96FC4"} />
        </TouchableOpacity>
        
     </View>
     <Companyinterface navigation={navigation} company_id={company_id}/>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Account