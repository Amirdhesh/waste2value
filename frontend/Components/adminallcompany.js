import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {useState, useEffect} from "react";
import { Button } from "react-native-elements";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
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
    fetch('http://192.168.56.1:3000/admin/admincompanyrequest')
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
      flex: 1,
      width:350,
      justifyContent: 'center',
      alignItems: 'left',
      marginTop:12,
      }}>
        <TouchableOpacity onPress={()=>handlePress(item.email)}>
        <View style={{borderColor:'#F4F4F4',borderWidth:2, borderRadius:12, height:90, backgroundColor:'ghostwhite', elevation:10}}>
        <Text style={{fontSize:28, fontWeight:"600"}}>Company Name: {item.company_name}</Text>
        <Text style={{fontSize:24,color:"green"}}>Address: {item.address}</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
return (
        
  <View style={{flex:1}}> 
  <StatusBar hidden={true}/>     
<View style={{flexDirection:'row',marginTop:35,justifyContent:'center',height:"10%"}}>
<View style={{flexDirection:'row',alignItems:'center',height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 296, borderRadius: 20 }}>



<TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize: 20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"  onChangeText={text => setsearch(text)}/>
<TouchableOpacity >
<Ionicons name="search" size={30} color="black" style={{width:'100%',marginRight:5}}/>
</TouchableOpacity>
</View>


<TouchableOpacity >
  <View style={{height: 57,borderWidth: 1,flexDirection:'column',alignItems:'center',justifyContent:'center', borderColor: '#BC5EB6',marginLeft:1,backgroundColor: '#F4F4F4',borderRadius:15,width:47, elevation: 20 }}>
  <Ionicons name="notifications" size={24} color="black" style={{marginVertical:0,marginHorizontal:0}}/>
  </View>
</TouchableOpacity>




    
    

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
