import { View, Text,Image,FlatList, FlatListComponent,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import Url from './Url';
const Cart = ({navigation,route}) => {

  const{customer_id} = route.params;
  const [data,setData] = useState({});

  useEffect(()=>{
    fetchContributionData();
  },[])

  const fetchContributionData=()=>{
    fetch(`${Url()}/api/contributions/${customer_id}`)
    .then((response)=>response.json())
    .then((data)=>{
      setData(data);
      console.log(customer_id,data);
    })
    .catch((error)=>console.log(error))
  }


  const Product=({item})=>{

    const dateObject = new Date(item.date_info);

    // Format the date in "DD MMM YYYY" format
    const formattedDate = dateObject.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return (
    <View style={{paddingVertical:20,borderBottomWidth:1, borderColor:'black'}}>
    <View style={{alignItems:'left',marginRight:20}}>
     
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:22 , fontWeight:800}}>Contribution Id  :</Text>
            <Text style={{fontSize:22 , fontWeight:800}}>{item.contribution_id}</Text>
            </View>  
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:22}}>Date                     :</Text>
            <Text style={{fontSize:22}}>{formattedDate}</Text>
            </View>  
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:22}}>Status                  :</Text>
            <Text style={{fontSize:22, color:item.status=='pending'?'red':'green'}}>{item.status}</Text>
            </View>  
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:22}}>Coins                   :</Text>
            <Text style={{fontSize:22}}>{item.coins}</Text>
            </View>  
        
          </View>  
     </View>

  )
  }

  function quantityminus(code){
    console.log(code);
  }
  function quantityplus(code){
    console.log(code)
  }

  return (
    <ScrollView style={{flex:1}}>
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name= "keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 
          </TouchableOpacity>


        </View>
        <View style={{paddingRight:70}}>
          <Text style={{fontSize:35,fontWeight:900}}>Contributions</Text> 

          </View>
                </View>
        </View> 
        <View style={{height:'100%'}}>
        <FlatList
           style={{flex:1,marginLeft:20,marginBottom:20,paddingBottom:30}}
            data={data}
            renderItem={({item})=><Product item={item}/>}
            keyExtractor={item=>item.id}
        />
        </View>
        
          
        
          
       
        
      
    </ScrollView>

  )
}

export default Cart