import { View, Text,Image,FlatList, FlatListComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import cart from "./../Assests/Cart.png"
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
import { Alert } from "react-native";
const Cart = ({route,navigation}) => {
  const plaseorder=(()=>{
    fetch(`http://192.168.56.1:3000/plaseorder/${customer_id}`)
    .then((response)=> response.json())
    .then((data)=>{
      navigation.navigate("ProductList",{customer_id:customer_id})
    })
    .catch((error)=>{
      console.error('Error fetching cart data:',error);
    })
  })
  const checkdetails=(()=>{
    fetch(`http://192.168.56.1:3000/checkdetails/${customer_id}`)
    .then((response)=> response.json())
    .then((data)=>{
      if(data.message=='Payment'){
        plaseorder()
      }
      else{
        navigation.navigate("Details",{customer_id:data.customer_id})
      }
    })
    .catch((error)=>{
      console.error('Error fetching cart data:',error);
    })
  })
  const {customer_id} = route.params;
  const [cartData, SetcartData] = useState([]); 
  console.log('customer_id:',customer_id);
  useEffect(()=>{
    cartdetail()
  },[]);
  const cartdetail=(()=>{
    fetch(`http://192.168.56.1:3000/api/cartdetails/${customer_id}`)
    .then((response)=> response.json())
    .then((data)=>{
      SetcartData(data);
    })
    .catch((error)=>{
      console.error('Error fetching cart data:',error);
    })
  });
  const deletecart=((product_id)=>{
    fetch(`http://192.168.56.1:3000/api/delete_to_cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customer_id,
        product_id: product_id,
      }),
      
    })
    .then((response) => response.json())
    .then((data) => {
      cartdetail();
      // Handle success or error response from the API
    })
    .catch((error) => {
      console.error(error);
    });
  })
  const Product=({item})=>(
    <View style={{paddingVertical:20,borderBottomWidth:1, borderColor:'black'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:100,width:107,backgroundColor:"#D9D9D9",borderRadius:10}}>

        </View>
        <View style={{left:15}}>
          <Text style={{fontSize:27 ,fontWeight:600 }}>{item.product_name}</Text>
          <Text style={{fontSize:20 , color:'green' , fontWeight:400 }}>Price: Rs.{item.product_price}</Text>
          <View style={{flexDirection:'row',marginLeft:-5}}>
              <Entypo onPress={()=>quantityminus(item.product_code)} name="circle-with-minus" size={24} color="#C96FC4" />
              <Text style={{fontSize:20,marginTop:-4,marginHorizontal:8}}>{item.quantity}</Text>
              <Ionicons onPress={()=>quantityplus(item.product_code)} name="ios-add-circle" size={24} color="#C96FC4" />
              <TouchableOpacity onPress={()=>deletecart(item.product_id)}>
              <Text style={{paddingLeft:10,paddingTop:5}}>Remove</Text>
              </TouchableOpacity>
          </View>
          
        </View>
     </View> 
     </View>

  )

  const totalCost = cartData.reduce(
    (total, item) => total + item.product_price,
    0
  );
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
        <Text style={{fontSize:43,marginRight:50}}>Cart</Text>
         <View></View>
        </View>
      </View>
      

        
      
      
        <View style={{ height:'80%'}}>
          { cartData.length !=0 && 
            <FlatList
          style={{paddingHorizontal:15}}
            data={cartData}
            renderItem={({item})=><Product item={item}/>}
            keyExtractor={item=>item.id}
          /> 
          }
          {cartData.length == 0 && 
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', height:'100%'}}>
        <Image source={cart} style={{height:361,width:285}} />
       </View> 
          }
          
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',height:'10%'}}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text style={{fontSize:16}}>Total Cost:</Text>
            <Text style={{fontSize:30}}>Rs.{totalCost}</Text>
          </View>
          
            <View style={{ height: 70,width: 220,shadowColor: '#52006A', elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 20,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>Alert.alert('Plase order','confrom to plase the order',[{text: "Yes", onPress:()=>checkdetails()},{text: "No"}])}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Place My order</Text>
            </TouchableOpacity>
            </View>
            
          
        </View>  
      
    </View>
  )
}

export default Cart