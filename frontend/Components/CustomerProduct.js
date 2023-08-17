import { View, Text,TextInput, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
   
const CustomerProduct = () => {
  return (
    <View style={{flex:1}}> 
      <StatusBar hidden={true}/>     
      <View style={{height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:"90%"}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
           <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 
        </View>
        
        </View>
      </View>
      <View style={{height:'80%',}}>
        <View style={{flexDirection:'column',alignItems:'center',height:"49%"}}>
            <View style={{height:"100%",width:"92%",backgroundColor:'gray'}}>

            </View>
        </View>

        <View style={{flexDirection:'row',width:"92%",justifyContent:'space-between',marginTop:0,marginHorizontal:13,height:'15%',alignItems:'center',}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:8}}>
                <Text style={{fontSize:22}}>Product Name</Text>
                <Text style={{fontSize:23}}>$350</Text>
            </View>
            <Text style={{fontSize:21,marginTop:24,marginRight:8}}>In Stack</Text>
        </View>
        <View style={{width:'92%',marginTop:-10,marginHorizontal:22}}>
            <Text style={{fontSize:18}}>Product Description:</Text>
        </View>
        <ScrollView>
            <Text style={{width:'92%',marginTop:10,textAlign:'justify',marginHorizontal:22}}>
                Hello
            </Text>
        </ScrollView>
      </View>
      <View style={{height:'10%'}}>
      <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center',margin:20,height:60,width:343,backgroundColor:"#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Add to Cart</Text>
        </View>
      </View>
    </View>
  )
}

export default CustomerProduct