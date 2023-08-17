import { View, Text,Image,FlatList, FlatListComponent,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';




const Cart = ({navigation}) => {

  
  const cartdata = [
    {
    "product_name":'25/04/03',
    "product_code":123,
    "product_price":12,
    "quantity":10	
    },
    {
        "product_name":'25/04/03',
        "product_code":123,
        "product_price":12,
        "quantity":10	
        },
        {
            "product_name":'25/04/03',
            "product_code":123,
            "product_price":12,
            "quantity":10	
            },
            {
                "product_name":'25/04/03',
                "product_code":123,
                "product_price":12,
                "quantity":10	
                },
    ]
  const Product=({item})=>(
    <View style={{paddingVertical:20,borderBottomWidth:1, borderColor:'black'}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginRight:20}}>
        <View style={{height:64,width:67,backgroundColor:"#D9D9D9",borderRadius:10,marginLeft:-20}}>

        </View>
          <Text style={{fontSize:18,marginLeft:-10}}>{item.product_name}</Text>
          <Text style={{fontSize:22,marginLeft:-5}}>{item.quantity}</Text>
          <Text style={{fontSize:22,marginRight:-22,marginLeft:17}}>Status</Text>
                   
        
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
        <Text style={{fontSize:35,}}>Contributions</Text>
        <View></View>
        </View>
        </View> 
        <View style={{height:'5%'}}>
        <View style={{flexDirection:'row',alignItems:'center', marginHorizontal:'4%',justifyContent:'space-evenly',paddingVertical:2,borderTopWidth:2,borderBottomWidth:2,borderColor:'black'}}>
            <Text style={{fontSize:22,marginRight:10}}>Img</Text>
            <Text style={{fontSize:22,marginLeft:9}}>Date</Text>
            <Text style={{fontSize:22,marginLeft:8}}>Coins</Text>
            <Text style={{fontSize:22}}>Status</Text>
        </View>
        </View>
        <View style={{height:'85%'}}>
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