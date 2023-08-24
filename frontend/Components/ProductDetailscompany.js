import React, { useState, useEffect } from 'react';
import { View, Text, Alert,StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Url from './Url';
function ProductDetailscompany({ route,navigation}) {
  const [stack, setstack] = useState(true)
  const {customer_id, product_id} = route.params;
  const [productDetails, setProductDetails] = useState({});
  const deleteproduct=(()=>{
    fetch(`${Url()}/api/delete_product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product_id,
      }),
      
    })
    .then((response) => response.json())
    .then((data) => {
      navigation.navigate("CompanyStore",{customer_id});
      // Handle success or error response from the API
    })
    .catch((error) => {
      console.error(error);
    });
  })
  useEffect(() => {
    fetch(`${Url()}/api/selectedproduct/${product_id}`)
    
      .then((response) => {
        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [product_id]);

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
            <View style={{height:"100%",width:"80%",backgroundColor:'gray'}}>

            </View>
        </View>
        
        <View style={{flexDirection:'row',width:"92%",justifyContent:'space-between',marginTop:0,marginHorizontal:13,height:'15%',alignItems:'center',}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:8}}>
                <Text style={{fontSize:24}}>{productDetails.product_name}</Text>
                <Text style={{fontSize:23}}>₹{productDetails.product_price}</Text>
            </View>
            {stack ? <Text style={{fontSize:21,marginTop:24,marginRight:8,color:'green'}}>In Stack</Text>:
            <Text style={{fontSize:21,marginTop:24,marginRight:8,color:'red'}}>OutofStack</Text>
            }
            
        </View>
        <View style={{width:'92%',marginTop:-10,marginHorizontal:22}}>
            <Text style={{fontSize:20,}}>Product Description:</Text>
        </View>
        <ScrollView>
            <Text style={{width:'92%',marginTop:10,textAlign:'justify',marginHorizontal:22,fontSize:18}}>
            {productDetails.product_description}
            </Text>
        </ScrollView>
      </View>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>deleteproduct()} style={{flexDirection:'column',alignItems: 'center',justifyContent:'center',height:60,width:343,backgroundColor:"#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Delete Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 

export default ProductDetailscompany;


