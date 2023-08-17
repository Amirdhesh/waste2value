import { View, Text,TextInput,StatusBar,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from '../node_modules/react-native-keyboard-aware-scroll-view'

const Details = ({navigation}) => {
  return (
<KeyboardAwareScrollView
    style={{ flex:1 }}
    
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%'}}>
  <StatusBar hidden={true}/>
      <View style={{marginTop: 25,flexDirection:"row",alignItems:'center',justifyContent:'space-between',height:"10%",width:'90%'}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth: 1, borderColor: '#BC5EB6',backgroundColor: '#F4F4F4',borderRadius:15,width:45,height:50,shadowColor: '#52006A', elevation: 20 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="black" style={{marginLeft:-5}}/> 

          </TouchableOpacity>
        </View>
            <Text style={{fontSize: 30 , fontWeight: 400, marginLeft: 0}}>Details & Address</Text>
            <View></View>
      </View>
      <View style={{marginTop: 25}}>
          <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Name:</Text>
          <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />

      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Email: </Text>
            <View style={{flexDirection:'row',height: 57,alignItems:'center', borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 349, borderRadius: 9}}>
            <TextInput style={{height: 54, fontSize:22,paddingLeft:10, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: '90%', borderRadius: 9 }} />
            
            </View>
      </View>
           
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Phone number:</Text>
            <View style={{flexDirection:'row',height: 57,alignItems:'center', borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 349, borderRadius: 9}}>
                <TextInput keyboardType='phone-pad' style={{height: 53, fontSize:22,paddingLeft:10,borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: '88%', borderRadius: 9 }}   />
            </View>
      </View>
      <View style={{marginTop: 5}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Address</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 351, borderRadius: 9 }} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Pincode:</Text>
            <TextInput keyboardType='numeric' style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 136, borderRadius: 9 }} />
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>Landmark:</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 208, borderRadius: 9 }} />
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <View>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>District:</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 189, borderRadius: 9 }} />
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 26 , fontWeight: 400, marginLeft: 2}}>State:</Text>
            <TextInput style={{height: 57, fontSize:22,paddingLeft:10, borderWidth: 1, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 150, borderRadius: 9 }} />
        </View>
        
      </View>
     
      <View>
        

        <View style={{ height: 60,width: 351,shadowColor: '#52006A',margin:20, elevation: 20,backgroundColor: "#C96FC4",borderWidth: 1,borderColor: '#BD5CB7' ,borderRadius: 9,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={{  color: 'white' ,fontWeight: 500, fontSize: 20 }}>Ok</Text>
        </View>
      </View> 
      
      </View>
      
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
  
)
}

  


export default Details