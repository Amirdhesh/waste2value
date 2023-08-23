import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';  
import { Feather } from '@expo/vector-icons';
import React from 'react'

    // const wallet=()=>{
    //     navigation.navigate("CompanyWallet",{customer_id});
    // }
const Companyinterfase = ({company_id,navigation}) => {
    return(
        <View style={{position:'absolute',bottom:8,right:25,left:25 }}>
        <View style={{flexDirection:'row',justifyContent:'center',shadowColor: '#52006A', elevation: 20, paddingVertical: 20,paddingHorizontal:10 ,margin:20, backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 20}}>
          <TouchableOpacity Onpress={()=>navigation.navigate('CompanyStore',{company_id:company_id})}>
          
          <View>
              <MaterialCommunityIcons name="storefront-outline" size={34} color="white" style={{marginRight:14}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Contribution",{company_id:company_id})} > 
          <View>
              <Octicons name="diff-added" size={30} color="white" style={{marginHorizontal:14,marginTop:3}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('')}>
          <View>
          <Feather name="truck" size={34} color="white" style={{marginHorizontal:14,marginTop:1}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('')}>
          <View>
              <MaterialCommunityIcons name="account-box-multiple" size={32} color="white" style={{marginLeft:14,marginTop:1}} />
          </View>
          </TouchableOpacity>
          
  
        </View>
      </View>
    /*<View style={{flex:1}}>
        <Text style={{fontSize:20}}>Company</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Product',{ customer_id:customer_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>Add Product</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('CompanyStore',{ customer_id:customer_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Product</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Comapnyorderdetails',{ company_id:company_id })}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Orders</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>wallet()}>
        <Text style={{ paddingVertical: 10,paddingHorizontal: 139 ,margin:20, backgroundColor: "#D268CC",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9, color: 'white' ,fontWeight: 200, fontSize: 29 }}>View Wallet</Text>
    </TouchableOpacity>
    </View>
    </View>*/
    )
}

export default Companyinterfase 
