import { View, Text,TextInput, StatusBar,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import CustomerNavbar from './CustomerNavbar';
import { Ionicons } from '@expo/vector-icons'; 
import { useIsFocused } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useCallback } from 'react';
const CustomerStore = ({route,navigation}) => {
  const [Data, setProductData] = useState([]); // State for product data
  const [search,setsearch]=useState("");
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
        searchproduct();
    },[])
);

useEffect(()=>{
  const backAction=()=>{
    return true;
  }
  if(isFocused){
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  return () => backHandler.remove(); // Remove the event listener when component unmounts
  }
}, [isFocused]);

  const {customer_id} = route.params;
  //to search the product7
const searchproduct = async () => {
  try {
    const response = await fetch(`http://192.168.56.1:3000/api/searchproduct/${search}`);
    const data = await response.json();
    setProductData(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

   const wallet=async()=>{
    navigation.navigate('CustomerWallet',{customer_id});
   }

  const handleProductClick = (product_id) => {
    console.log(customer_id);
    navigation.navigate('ProductDetails', { product_id,customer_id });
  };

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
        <Text style={{fontSize:20, fontWeight:"600"}} onPress={()=>handleProductClick(item.product_id)}>{item.product_name}</Text>
        <Text style={{fontSize:14,color:"green"}} onPress={()=>handleProductClick(item.product_id)}>Price:Rs.{item.product_price}</Text>
      </View>
    );
  };

  return (
    <View style={{flex:1}}> 
      <StatusBar hidden={true}/>     
      <View style={{flexDirection:'row',marginTop:35,justifyContent:'center',height:"8%"}}>
        <View style={{flexDirection:'row',alignItems:'center',height: 57,marginRight:9 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 296, borderRadius: 20 }}>
        
       
       
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize: 20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black" value={search} onChangeText={text => setsearch(text)}/>
        <TouchableOpacity onPress={() => searchproduct()}>
        <Ionicons name="search" size={30} color="black" style={{width:'100%',marginRight:5}}/>
        </TouchableOpacity>
        </View>
       
        <TouchableOpacity onPress={() => wallet()}>
          <View style={{height: 57,borderWidth: 1, borderColor: '#BC5EB6',marginLeft:1,backgroundColor: '#F4F4F4',borderRadius:15,width:47, elevation: 20 }}>
             <MaterialIcons name="attach-money" size={40} color="black" style={{marginVertical:6,marginHorizontal:1}}/>
          </View>
        </TouchableOpacity>
        
        

      </View>
      <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => ( item.product_id)}
      numColumns={2} 
      style={ {flex: 1}}
    />

      <CustomerNavbar  navigation={navigation} customer_id={customer_id}/>
    </View>
    
  )
}
       
export default CustomerStore