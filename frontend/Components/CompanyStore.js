import { View, Text,TextInput, StatusBar,ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React,{useState,useEffect, useCallback} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useFocusEffect } from '@react-navigation/native';
import Companyinterfase from './Companyinterface';
import { AntDesign } from '@expo/vector-icons';
import { BackHandler } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Url from './Url';
const CompanyStore = ({navigation,route}) => {
    const [Data, setProductData] = useState([]);
    const {company_id} = route.params;
    const [search,setsearch]=useState("");
    const isFocused = useIsFocused();
    console.log("Entry :",company_id);
    useFocusEffect(
      useCallback(() => {
        searchproduct(); // Fetch product data from Flask API
    }));

    useEffect(()=>{
      const backAction=()=>{
        return true;
      }
      if(isFocused){
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => backHandler.remove(); // Remove the event listener when component unmounts
      }
    }, [isFocused]);
  
      const handleGoBackToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };


    const searchproduct = async () => {
        try {
          const response = await fetch(`${Url()}/api/companyproducts/${company_id}`);
          const data = await response.json();
          setProductData(data);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      };
      //UPdate this handleproductclick
      const handleProductClick = (product_id) => {
        navigation.navigate('ProductDetailscompany', {company_id, product_id });
      };
//Data=[{product_id:1,product_name:'oiisuef',product_price:100},{product_id:2,product_name:'oiisuef',product_price:100},{product_id:3,product_name:'oiisuef',product_price:100},]

      const renderItem = ({ item }) => {
        return (
          <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'}}>
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
        
       
       
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize: 20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"  onChangeText={text => setsearch(text)}/>
        <TouchableOpacity >
        <Ionicons name="search" size={30} color="black" style={{width:'100%',marginRight:5}}/>
        </TouchableOpacity>
        </View>
       
      
        <TouchableOpacity onPress={()=>navigation.navigate('Product',{company_id:company_id})}>
          <View style={{height: 57,borderWidth: 1,flexDirection:'column',alignItems:'center',justifyContent:'center', borderColor: '#BC5EB6',marginLeft:1,backgroundColor: '#F4F4F4',borderRadius:15,width:47, elevation: 20 }}>
              <AntDesign name="addfile" size={33} color="black" style={{marginVertical:0,marginHorizontal:0}}/>
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
        <Companyinterfase navigation={navigation} company_id={company_id}/>

        </View>
      )
}
export default CompanyStore