import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import React from 'react'

const CustomerNavbar = () => {
  return (
    <View style={{position:'absolute',bottom:30,right:25,left:25 }}>
      <View style={{flexDirection:'row',justifyContent:'center',shadowColor: '#52006A', elevation: 20, paddingVertical: 20,paddingHorizontal:10 ,margin:20, backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 20}}>
        <View>
            <MaterialCommunityIcons name="storefront-outline" size={34} color="white" style={{marginRight:14}}/>
        </View>
        <View>
            <Octicons name="diff-added" size={30} color="white" style={{marginHorizontal:14,marginTop:3}}/>
        </View>
        <View>
            <Ionicons name="ios-cart-outline" size={38} color="white" style={{marginHorizontal:14,marginTop:-2}}/>
        </View>
        <View>
            <MaterialCommunityIcons name="account-box-multiple" size={32} color="white" style={{marginLeft:14,marginTop:1}} />
        </View>

      </View>
    </View>
  )
}

export default CustomerNavbar