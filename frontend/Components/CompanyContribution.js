import { View, Text,TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Companyinterface from './Companyinterface';
const CompanyContribution = ({navigation}) => {
  const [accept, setaccept] = useState(false)
  Data=[{product_id:1,product_name:'oiisuef',product_Status:true},{product_id:2,product_name:'oiisuef',product_Status:false},{product_id:3,product_name:'oiisuef',product_Status:true},]

    const Product=({item})=>(
        <View style={{paddingVertical:15,borderBottomWidth:1, borderColor:'black',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{height:80,width:87,backgroundColor:"#D9D9D9",borderRadius:10}}>
    
            </View>
            <View style={{left:15}}>
              <Text style={{fontSize:27 ,fontWeight:600 }}>{item.product_name}</Text>
              <Text style={{fontSize:20 , color:'green' , fontWeight:400 }}>Price: Rs.{item.product_price}</Text>
              
              
            </View>
           
         </View> 
         {
              item.product_Status && 
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <View style={{width:96,height:37,backgroundColor:"#D268CC",borderRadius:10,flexDirection:'column',justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'white'}}>Accept</Text></View>
              <Entypo name="cross" size={40} color="black" />
              </View>
            }
         </View>
    
      )
  return (
    <View style={{flex:1}}>
    <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor:'#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor:'#52006A', elevation: 20 }}> 
          <TouchableOpacity >
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:35,}}>Contribution</Text>
        <View></View>
    
      </View>
    </View>
    <View style={{width:'100%',height:'10%',flexDirection:'column',alignItems:'center',top:15}}>
        <View style={{width:'70%',height:'50%',borderColor:'#BC5EB6',borderWidth:1,borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Text onPress={()=>setaccept(false)} style={{fontSize:20,color:accept==false ? '#BC5EB6':'black' }}>All</Text>
            <Text onPress={()=>setaccept(true)} style={{fontSize:20,color:accept==true ? '#BC5EB6':'black' }}>Accepted</Text>
        </View>
    </View>
    <View style={{flex:1}}>
    <FlatList
          style={{paddingHorizontal:15}}
            data={Data}
            renderItem={({item})=><Product item={item}/>}
            keyExtractor={item=>item.id}
          /> 
    </View>
    <Companyinterface navigation={navigation}/>
</View>
  )
}

export default CompanyContribution