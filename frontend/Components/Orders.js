import { View, Text,Image,FlatList, FlatListComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';




const Cart = ({navigation}) => {

  
  const cartdata = [
    {
    "product_name":"amir",
    "product_code":123,
    "product_price":12,
    "quantity":10	
    },
    {
      "product_name":"amir",
      "product_code":123,
      "product_price":12,
      "quantity":10	
      },
      {
        "product_name":"amir",
        "product_code":123,
        "product_price":12,
        "quantity":10	
        },
        {
          "product_name":"amir",
          "product_code":123,
          "product_price":12,
          "quantity":10	
          },
          {
            "product_name":"amir",
            "product_code":123,
            "product_price":12,
            "quantity":10	
            },
            {
              "product_name":"amir",
              "product_code":123,
              "product_price":12,
              "quantity":10	
              },
              {
                "product_name":"amir",
                "product_code":123,
                "product_price":12,
                "quantity":10	
                },
    ]
  const Product=({item})=>(
    <View style={{paddingVertical:20,borderBottomWidth:1, borderColor:'black'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:100,width:107,backgroundColor:"#D9D9D9",borderRadius:10}}>

        </View>
        <View style={{left:15}}>
          <Text style={{fontSize:30}}>{item.product_name}</Text>
          <Text style={{fontSize:20}}>status</Text>
          <Text style={{fontSize:20,marginTop:-4,marginHorizontal:8}}>{item.quantity}</Text>
                   
        </View>
     </View> 
     </View>

  )

  function quantityminus(code){
    console.log(code);
  }
  function quantityplus(code){
    console.log(code)
  }

  return (
    <View style={{flex:1}}>
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:38,marginRight:30}}>Orders</Text>
        <View></View>
        </View>
        </View> 
        <View style={{height:'90%'}}>
        <FlatList
           style={{paddingHorizontal:15}}
            data={cartdata}
            renderItem={({item})=><Product item={item}/>}
            keyExtractor={item=>item.id}
        />
        </View>
       
          
        
          
       
        
      
    </View>
  )
}

export default Cart