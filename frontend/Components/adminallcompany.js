import React from "react";
import { TouchableOpacity, View,StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {useState, useEffect} from "react";
import { Button } from "react-native-elements";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Url from "./Url";
import Admininterface from "./Admininterface";
const Adminallcompany=({navigation})=>{
   
  const [companydata,setcompanydata] = useState({});
   useFocusEffect(
    useCallback(() => {
      CompanyData();
    }, [])
  );

  const CompanyData=async()=>
  {
    console.log("Function called");
    fetch(`${Url()}/admin/admincompanyrequest`)
    .then((response)=>response.json())
    .then((data)=>{
      setcompanydata(data)
      console.log(data)
        })
  }
 const handlePress=(email)=>
 {
  navigation.navigate('admincompanydisplay',{email});
 }

  const renderItem =({item})=>
  (
    <View style={{
      flexDirection:'column',
      
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10
      }}>
        <TouchableOpacity onPress={()=>handlePress(item.email)} style={{borderColor:'#F4F4F4',width:'90%',borderWidth:2, borderRadius:12, height:120, backgroundColor:'ghostwhite', elevation:1}}>
        
        <Text style={{fontSize:25, fontWeight:"400",paddingLeft:8}}>{item.company_name}</Text>
        <Text style={{fontSize:24,color:"green",paddingLeft:8}}>Address: {item.address}</Text>
        
        </TouchableOpacity>
      </View>
  )
return (
        
  <View style={{flex:1}}> 
  <StatusBar hidden={true}/>     
<View style={{flexDirection:'row',marginTop:35,justifyContent:'center',height:"10%"}}>
<View style={{flexDirection:'row',alignItems:'center',height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 343, borderRadius: 20 }}>



<TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize: 20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"  onChangeText={text => setsearch(text)}/>
<TouchableOpacity  >
<Ionicons name="search" size={30} color="black" style={{width:'100%',marginRight:5}}/>
</TouchableOpacity>
</View>







    
    

  </View>
       <View style={{height:'73%'}}>
       <FlatList
      data={companydata}
      renderItem={renderItem}
      keyExtractor={item => ( item.email)}
      numColumns={1}
      Style={{marginTop:20,width:'90%'}}
      />
      </View>  
           
          
       <Admininterface navigation={navigation} />
        </View>

        )
        
        }
export default Adminallcompany;
