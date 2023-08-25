import { StyleSheet, View, TouchableOpacity,} from 'react-native'
import React,{useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Admininterface = ({admin_id,navigation}) => {
     
    return(
        <View style={{position:'absolute',bottom:8,right:25,left:25 }}>
        <View style={{flexDirection:'row',justifyContent:'center',shadowColor: '#52006A', elevation: 20, paddingVertical: 20,paddingHorizontal:10 ,margin:20, backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 20}}>
          <TouchableOpacity >
          
          <View>
              <MaterialCommunityIcons name="storefront-outline" size={34} color="white" style={{marginRight:14}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Adminuserdetialsdispaly")} > 
          <View>
                <FontAwesome5 name="user" size={28} color="white" style={{marginHorizontal:14,marginTop:3}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('adminallcompany',{ admin_id:admin_id })}>
          <View>
                <MaterialCommunityIcons name="office-building" size={36} color="white" style={{marginHorizontal:14,marginTop:0}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Companyrequest")} >
          <View>
              <MaterialCommunityIcons name="account-box-multiple" size={32} color="white" style={{marginLeft:14,marginTop:1}} />
          </View>
          </TouchableOpacity>
          
  
        </View>
      </View>

    // <View style={{flex:1}}>
    //     <Text style={{fontSize:20}}>Admin</Text>
    // <TouchableOpacity onPress={()=>navigation.navigate('Companyrequest')}>
    //     <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>Pending request</Text>
    // </TouchableOpacity>
    // <TouchableOpacity onPress={()=>navigation.navigate('adminallcompany',{ admin_id:admin_id })}>
    //     <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Copmanys </Text>
    // </TouchableOpacity>
    // <TouchableOpacity onPress={()=>navigation.navigate("Adminuserdetialsdispaly")}>
    //     <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Users</Text>
    // </TouchableOpacity>
    // </View>
    )
}
export default Admininterface 
const styles = StyleSheet.create({})