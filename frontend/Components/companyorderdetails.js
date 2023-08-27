import { View, Text,TextInput, StatusBar,ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import CustomerNavbar from './CustomerNavbar' 
import { Ionicons } from '@expo/vector-icons'; 
import { useFocusEffect } from '@react-navigation/native';
import Companyinterface from './Companyinterface';
import Url from './Url';
const Comapnyorderdetails = ({route ,navigation}) => {
    const [Data, setProductData] = useState([]);
    const {company_id} = route.params;
    
    const [companydata,setcompanydata] = useState({});
   useEffect(() => {
      CompanyData();
    }, [])

  const CompanyData=async()=>
  {
    console.log("Function called");
    fetch(`${Url()}/companyorderdetails/${company_id}`)
    .then((response)=>response.json())
    .then((data)=>{
      setcompanydata(data)
      console.log(data)
        })
  }
 const handlePress=(email)=>
 {
  navigation.navigate('admincompanydisplay',{email});
 }

  const renderItem =({item})=>
  (
    <View style={{
      flex: 1,
      width:350,
      justifyContent: 'center',
      alignItems: 'left',
      marginTop:12,
      }}>
        <TouchableOpacity onPress={()=>handlePress(item.email)}>
        <View style={{borderColor:'#F4F4F4',borderWidth:2, borderRadius:12, height:140, backgroundColor:'ghostwhite', elevation:10}}>
        <Text style={{fontSize:25, fontWeight:"500"}}>Customer Name: {item.username}</Text>
        <Text style={{fontSize:24,color:"green"}}>Address: {item.address}</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
return (
        
      <View style={{flex:1}}>
        <View style={{flexDirection:'row', marginTop:20,marginLeft:20,alignItems:'center',height: 57 ,borderWidth: 1,shadowColor: '#52006A', elevation: 20, borderColor: '#BC5EB6', backgroundColor: '#F4F4F4',width: 343, borderRadius: 20 }}>
        <Ionicons name="search" placeholder="Search Pending request with company name" size={30} color="black" style={{width:'10%',marginLeft:5}}/>
        <TextInput style={{height: 55,backgroundColor: '#F4F4F4',width: '88%',fontSize:20,paddingLeft:7, borderRadius: 20 }} placeholder='Search here...' placeholderTextColor="black"/>
        </View>
        <View style={{marginTop:20 ,marginLeft:20, width:500}}>
          {
            companydata.length !=0&&
           <FlatList
      data={companydata}
      renderItem={renderItem}
      keyExtractor={item => ( item.email)}
      numColumns={1}
    />
          }
    </View>
    <Companyinterface navigation={navigation} company_id={company_id}/>
        </View>


        )
        
        }
export default Comapnyorderdetails