import { View, Text,TextInput,StatusBar } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Details = () => {
  return (
    <View style={{flex:1,}}>
    <StatusBar hidden={true}/>
    
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'10%'}}>
        <View style={{flexDirection:'row',justifyContent:'center',borderWidth: 1,left:20, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:47,shadowColor: '#52006A', elevation: 20 }}>
           <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 
        </View>
        <Text style={{fontSize:35}}>Details & Address</Text>
        <View></View>
    </View>
    <View style={{flexDirection:'column',alignItems:'center',height:'80%',justifyContent:'space-evenly'}}>
    <View style={{marginTop: 5}}>
        <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Company Name:</Text>
        <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />

    </View>
    <View style={{marginTop: 5}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }}/>
    </View>
         
    <View style={{marginTop: 5}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Phone Number:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />
    </View>
    <View style={{marginTop: 5}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Address:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />
    </View>
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
      <View>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Pincode:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 136, borderRadius: 9 }} />
      </View>
      <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Landmark:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 208, borderRadius: 9 }} />
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
      <View>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>District:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 164, borderRadius: 9 }} />
      </View>
      <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>State:</Text>
          <TextInput style={{height: 57, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 175, borderRadius: 9 }}/>
      </View>
      
    </View>
    </View>
    <View style={{height:'10%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{ height: 60,width: 351,shadowColor: '#52006A', elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Ok</Text>
        </View>

    </View>      
    
  </View>
  
)
}

  


export default Details