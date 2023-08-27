import React from "react";
import { Text,TouchableOpacity,View,StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Url from "./Url";
const Contribute=({navigation,route})=>
{
    const {customer_id} = route.params;
    const checkdetails=(()=>{
        fetch(`${Url()}/checkdetails/${customer_id}`)
        .then((response)=> response.json())
        .then((data)=>{
          if(data.message=='Payment'){
            navigation.navigate("ContributeWaste",{customer_id:data.customer_id})
          }
          else{
            navigation.navigate("Details",{customer_id:data.customer_id})
          }
        })
        .catch((error)=>{
          console.error('Error fetching cart data:',error);
        })
      })
 
 
    return(
      <View style={{flex:1}}>
      <StatusBar hidden={true}/>
      <View style={{height:'10%',flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%',width:"90%"}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
        <Text style={{fontSize:40,marginRight:25}}>Contribute</Text>
         <View></View>
        </View>
      </View>
        <View style={{flex:1,justifyContent:'center',borderColor:'black',borderWidth:2,margin:50,borderRadius:20,alignItems:'center'}}>

            <TouchableOpacity onPress={()=>checkdetails()} style={{justifyContent:'center',marginVertical:20,alignItems:'center',height:90,width:250, backgroundColor:"#D268CC", borderColor:"#D268CC",borderWidth:2,borderRadius:12,elevation:20,shadowColor:"#D268CC"}}>
                
                    <Text style={{fontSize:28,fontWeight:600,color:'white'}}>Contribute</Text>
                
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("UserContribution",{customer_id})} style={{justifyContent:'center',marginVertical:20,alignItems:'center',height:90,width:250, backgroundColor:"#D268CC", borderColor:"#D268CC",borderWidth:2,borderRadius:12,elevation:20,shadowColor:"#D268CC"}}>
                    <Text style={{fontSize:28,fontWeight:600,color:'white'}}>View your contributions</Text>
                
            </TouchableOpacity>
        </View>
    </View>
    )
}
export default Contribute;