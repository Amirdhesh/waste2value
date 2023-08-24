import React from "react";
import { TouchableOpacity, View,TextInput,FlatList,StatusBar,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useState, useEffect} from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Admininterface from "./Admininterface";
const Adminuserdetialsdispaly=({navigation})=>{
   
  const [companydata,setcompanydata] = useState({});
   useFocusEffect(
    useCallback(() => {
      CompanyData();
    }, [])
  );

  const CompanyData=async()=>
  {
    console.log("Function called");
    fetch('http://192.168.56.1:3000/admin/adminuserrequest')
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
        <TouchableOpacity onPress={()=>handlePress(item.email)} style={{borderColor:'#F4F4F4',width:'90%',borderWidth:2, borderRadius:12, height:90, backgroundColor:'ghostwhite', elevation:3}}>
        
        <Text style={{fontSize:28, fontWeight:"600",paddingLeft:8}}>Customer Name: {item.username}</Text>
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
<TouchableOpacity >
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
export default Adminuserdetialsdispaly;
