import { View, Text,TextInput, StatusBar,ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import CustomerNavbar from './CustomerNavbar' 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const CustomerStore = ({navigation}) => {
  const [filter, setfilter] = useState(false)
  const Data=[
    
    {
      id:0,
      pname:'product 0 '
    },
    {
      id:1,
      pname:'product 1'
    },
    {
      id:2,
      pname:'product 2'
    },
    {
      id:3,
      pname:'product 3'
    },
    {
      id:4,
      pname:'product 4'
    },
    {
      id:5,
      pname:'product 5'
    },
    {
      id:6,
      pname:'product 6'
    },
    {
      id:7,
      pname:'product 7'
    },
    {
      id:8,
      pname:'product 8'
    },
    {
      id:9,
      pname:'product 9'
    },
    {
      id:10,
      pname:'product 10'
    },
   
    {
      id:11,
      pname:'product 4'
    },
    {
      id:12,
      pname:'product 4'
    },
    {
      id:13,
      pname:'product 4'
    },
    {
      id:14,
      pname:'product 4'
    },
    {
      id:15,
      pname:'product 4'
    },
    {
      id:16,
      pname:'product 4'
    },
   

  ]

  // const Product=({item})=>(
  //   <View style={{}}>
  //     <View style={{flexDirection:'row',justifyContent:"space-evenly",}}>
  //       <View>
  //       <View style={{height:100,width:100,backgroundColor:"grey"}}></View>
  //       <Text>{item.pname}</Text>
  //       </View>
  //       <View>
  //       <View style={{height:100,width:100,backgroundColor:"grey"}}></View>
  //       <Text>{item.pname}</Text>
  //       </View>
  //     </View>

  //   </View>
  // )
  
  const renderItem = ({ item }) => {
    
        
    return (
      <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',}}>
        <View style={{height:200,width:178,borderRadius:10,backgroundColor:"grey"}}></View>
        <Text style={{fontSize:16}}>{item.pname}</Text>
      </View>
    );
  };

  return (
    <View style={{flex:1}}> 
      <StatusBar hidden={true}/>     
      <View style={{flexDirection:'row',marginTop:35,justifyContent:'center',height:"8%"}}>
        <View style={{flexDirection:'row',alignItems:'center',height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 296, borderRadius: 20 }}>
        <Ionicons name="search" size={30} color="black" style={{width:'10%',marginLeft:5}}/>
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize:20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"/>
        </View>
      
        <TouchableOpacity onPress={() => setfilter(true)}>
          <View style={{height: 57,borderWidth: 1, borderColor: '#BC5EB6',marginLeft:1,backgroundColor: '#F4F4F4',borderRadius:15,width:47,shadowColor: !filter ? '#52006A' : undefined, elevation: 20 }}>
             <MaterialIcons name="tune" size={40} color="black" style={{marginVertical:6,marginHorizontal:1}}/>
          </View>
        </TouchableOpacity>
        
        

      </View>
      <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => ( item.id)}
      numColumns={2} 
      style={ {flex: 1}}
    />
      {
          filter && 
          <View style={{position:'absolute',flexDirection:'column',alignItems:'center',borderRadius:10,height:'25%',backgroundColor:"white",elevation:20,shadowColor: '#52006A',borderWidth:2,borderColor: '#BC5EB6',width:"50%",top:34,right:20}}>
            <View style={{flexDirection:'row',width:"92%",justifyContent:"space-between",height:'100%'}}>
                <View></View>
                <Text style={{fontSize:23,paddingLeft:20}}>Filter</Text>
                <TouchableOpacity onPress={()=>setfilter(false)}>
                <Entypo name="cross" size={28} color="black" style={{paddingTop:3}} />
                </TouchableOpacity>
                
              </View>
          </View>

          
        }
      <CustomerNavbar  navigation={navigation}/>
    </View>
  )
}
       
export default CustomerStore