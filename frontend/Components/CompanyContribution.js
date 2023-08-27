import { View, Text,TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard,FlatList } from 'react-native'
import React, { useState } from 'react';
import {useFocusEffect} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useCallback } from 'react';
import Companyinterface from './Companyinterface';
import Url from './Url';
const CompanyContribution = ({navigation,route}) => {
  const {company_id}= route.params;
  const [Data,setData] = useState({})
  const [accept,setaccept]=useState(false)
  useFocusEffect(
    useCallback(() => {
      if(accept===false)
        viewContribution();
      else
      handleAccepted();
    },[])
);

const viewContribution=async()=>{
        fetch(`${Url()}/api/ViewAllContributions`)
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data);
          setData(data)
        })
        .catch((error)=>console.error(error))
}
  
 const handleAll=()=>{
  setaccept(false);
  viewContribution();
 }
  const handleAccepted=()=>{
    setaccept(true);
    fetch(`${Url()}/api/ViewAcceptedContributions/${company_id}`)
    .then((response)=>response.json())
    .then((data)=>{
      setData(data)
      console.log(data)
    })
    .catch((error)=>console.error(error))

  }
    const Product=({item})=>{
      const dateObject = new Date(item[1]);

      // Format the date in "DD MMM YYYY" format
      const formattedDate = dateObject.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      const contribution_id=item[0]
      return(
        <TouchableOpacity>
        <View style={{paddingVertical:15,borderBottomWidth:1, borderColor:'black',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{height:80,width:87,backgroundColor:"#D9D9D9",borderRadius:10}}>
    
            </View>
            <View style={{left:15}}>
            <Text style={{fontSize:25  , fontWeight:600}} onPress={()=>accept==false?navigation.navigate("ViewContributionDetails",{contribution_id,company_id}):navigation.navigate("WasteCollection",{contribution_id,company_id})}>District:{item[2]}</Text>
              <Text style={{fontSize:20 ,fontWeight:400}} onPress={()=>accept==false?navigation.navigate("ViewContributionDetails",{contribution_id,company_id}):navigation.navigate("WasteCollection",{contribution_id,company_id})}>Contribution id:{contribution_id}</Text>
              <Text style={{fontSize:20 , color:'green' , fontWeight:400 }} onPress={()=>accept==false?navigation.navigate("ViewContributionDetails",{contribution_id,company_id}):navigation.navigate("WasteCollection",{contribution_id,company_id})}>Date:{formattedDate}</Text>
              
              
            </View>
            </View>
            </View>
            </TouchableOpacity> 
    
      )
          }
  return (
    <View style={{flex:1}}>
    <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor:'#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor:'#52006A', elevation: 20 }}> 
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:35,}}>Contribution</Text>
        <View></View>
    
      </View>
    </View>
    <View style={{width:'100%',height:'10%',flexDirection:'column',alignItems:'center',top:15}}>
        <View style={{width:'70%',height:'50%',borderColor:'#BC5EB6',borderWidth:1,borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Text onPress={()=>handleAll()} style={{fontSize:20,color:accept==false ? '#BC5EB6':'black' }}>All</Text>
            <Text onPress={()=>handleAccepted()} style={{fontSize:20,color:accept==true ? '#BC5EB6':'black' }}>Accepted</Text>
        </View>
    </View>
    <View style={{flex:1}}>
    <FlatList
          style={{paddingHorizontal:15}}
            data={Data}
            renderItem={({item})=><Product item={item}/>}
            keyExtractor={item=>item[0]}
          /> 
    </View>
    <Companyinterface navigation={navigation} company_id={company_id}/>
</View>
  )
}

export default CompanyContribution