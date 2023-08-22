import { View, Text, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const WalletPayment = ({navigation,route}) => {

  const {customer_id,requiredcoins} = route.params;
 const addcoins=()=>{
  fetch(`http://192.168.56.1:3000/api/addcoins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customer_id,
        coins:requiredcoins,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle success or error response from the API
    })
    .catch((error) => {
      console.error(error);
    });
 }
    
  return (
    <View style={{flex:1}}>
        <StatusBar hidden={true}/>
        <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:38,marginRight:50}}>Payment</Text>
         <View></View>
        </View>
      </View>
        
      <View style={{height:'40%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{height:"85%",flexDirection:'column',width:'97%',elevation:5,backgroundColor:'#F5F5F5',borderRadius:10,borderWidth:2,borderColor:'#C96FC4'}}>
        <View style={{margin:20,paddingVertical:5,borderBottomWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderColor:'black'}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        
          <View style={{left:30,paddingTop:50,bottom:20}}>
            <Text style={{fontSize:23 , fontWeight:600}}>Number of coins  :  {requiredcoins}</Text>
            <Text style={{fontSize:23, fontWeight:600}}>Price                       :   Rs. {requiredcoins}</Text>
            </View>
     </View> 
     <FontAwesome name="remove" size={24} color="black" style={{marginRight:10,bottom:20}}/>
     </View>
        </View>

        
      </View>

      <View style={{height:'15%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{height:"95%",width:'97%',backgroundColor:'#F5F5F5',borderRadius:10,elevation:5,borderWidth:2,borderColor:'#C96FC4'}}>
            <Text style={{fontSize:20,marginLeft:10,color:'#C96FC4'}}>UPI:</Text>
            
                <TextInput style={{borderBottomWidth:1,width:"95%",margin:10,marginVertical:2}} placeholder='Phone Number' />
                <View style={{marginHorizontal:10,marginVertical:7,flexDirection:'row',justifyContent:'space-between'}}>
                    <TextInput style={{borderBottomWidth:1,width:"40%"}} placeholder='OTP' />
                    <View style={{height:30, width:110,backgroundColor:'#C96FC4',flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{color:'white'}}>Verify</Text>
                    </View>
                </View>
            
            

        </View>

      </View>

      <View style={{height:'25%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{height:"80%",width:'97%',backgroundColor:'#F5F5F5',borderRadius:10,elevation:5,borderWidth:2,borderColor:'#C96FC4'}}>
        <Text style={{fontSize:20,marginLeft:10,color:'#C96FC4'}}>Credit/Debit Card:</Text>
            
            <TextInput style={{borderBottomWidth:1,width:"95%",margin:10,marginVertical:5}} placeholder='Card Number' />
            <View style={{marginHorizontal:10,marginVertical:12,flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput style={{borderBottomWidth:1,width:"50%"}} placeholder='Expiry Date' />
                <TextInput style={{borderBottomWidth:1,width:"45%"}} placeholder='CVV' />
            </View>
            <View style={{marginHorizontal:10,marginVertical:5,flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput style={{borderBottomWidth:1,width:"60%"}} placeholder='Phone Number' />
                <TextInput style={{borderBottomWidth:1,width:"35%"}} placeholder='OTP' />
            </View>
        </View>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',height:'10%'}}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text style={{fontSize:16}}>Total Cost:</Text>
            <Text style={{fontSize:30}}>Rs.{requiredcoins}</Text>
          </View>
          <View style={{ height: 70,width: 220,shadowColor: '#52006A', elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 20,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>addcoins()}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Pay</Text>
            </TouchableOpacity>
            </View>
        </View>  
      
    </View>
  )
}

export default WalletPayment;