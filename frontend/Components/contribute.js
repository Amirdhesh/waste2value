import React from "react";
import { Text,TouchableOpacity,View } from "react-native";

const Contribute=()=>
{
    return(
        <View style={{flex:1,justifyContent:'center',borderColor:'black',borderWidth:2,margin:50,borderRadius:20,alignItems:'center'}}>

            <TouchableOpacity onPress={()=>navigation.navigate("ContributeWaste",{customer_id})}>
                <View style={{justifyContent:'center',alignItems:'center',height:100,width:200, backgroundColor:"lightpink", borderColor:'salmon',borderWidth:2,borderRadius:12,elevation:20,shadowColor:'red'}}>
                    <Text style={{fontSize:28,fontWeight:600}}>Contribute</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop:60}} onPress={()=>navigation.navigate("Contribution",{customer_id})}>
                <View style={{justifyContent:'center',alignItems:'center',height:100,width:200, backgroundColor:"pink", borderColor:'salmon',borderWidth:2,borderRadius:12,elevation:20,shadowColor:'red'}} >
                    <Text style={{fontSize:28,fontWeight:600}}>View your contributions</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}
export default Contribute;