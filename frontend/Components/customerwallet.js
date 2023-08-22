import { React } from "react";
import { View,Text, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { TextInput } from "react-native-paper";
const CustomerWallet=({navigation,route})=>{

    const {customer_id}= route.params;
    const [coins,setCoins] = useState(0);
    const [requiredcoins,setRequiredCoins]= useState(0);

   useFocusEffect(
        useCallback(() => {
            fetchCoins();
        },[])
    );

   
  const fetchCoins = async () => {
    fetch(`http://192.168.56.1:3000/api/fetchcustomercoins/${customer_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data['wallet_amount']); // Assuming the returned data is the number of coins
      })
      .catch((error) => {
        console.log(error);
      });
  };



    return(
        <View style={{flex:1,margin:40,alignItems:'center'}}>
           <View style={{justifyContent:'center',alignItems:'center',borderColor:'deepblue',width:350,height:200, borderWidth:3,borderRadius:12,elevation:12,shadowColor:'pink'}}> 
            <Text style={{fontSize:30,fontWeight:900 }}>Available coins: </Text>
            <Text style={{fontSize:50,fontWeight:700}}>{coins}</Text>
        </View>
        <View style={{margin:10 ,justifyContent:'center',borderColor:'deepblue', width:350 ,height:500,borderWidth:3,borderRadius:12,elevation:12,shadowColor:'pink'}}>
        <View style={{margin:30}}>
            <Text style={{fontWeight:600, fontSize:20}}>ADD MORE COINS: </Text>
            <Text style={{fontWeight:500, fontSize:17}}>Enter the required number of coins</Text>
            <TextInput style={{height:50,width:200,borderColor:'deepblue',borderWidth:1,borderRadius:12}} onChangeText={(text)=>setRequiredCoins(text)}/>
        </View>
        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
           <View>
            <Text style={{fontSize:18,  fontWeight:700}}>
                Total Price:  Rs.{requiredcoins}          </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("WalletPayment",{customer_id,requiredcoins})}>
                <View style={{margin:20,borderColor:'#BD5CB7',borderRadius:12,elevation:12,shadowColor:'grey',height:50,width:100,borderWidth:1,justifyContent:'center',alignItems:'center',backgroundColor:'#D268CC'}}>
                <Text>Add coins</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    );
}

export default CustomerWallet;