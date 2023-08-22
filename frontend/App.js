import { StatusBar } from 'react-native';
import SignUp from './Components/SignUp';
import Register from './Components/Register';
import CustomerNavbar from './Components/CustomerNavbar';
import Cart from './Components/Cart';
import Details from './Components/Details';
import  Orders from './Components/Orders';
import Contribution from './Components/Contribution';
import Account from './Components/Account';
import CustomerPayment from './Components/CustomerPayment';
import ForgetPassword from './Components/ForgetPassword';
import OTP from './Components/OTP';
import CustomerProduct from './Components/CustomerProduct';
import { Header } from 'react-native-elements';
import Login from './Components/login';
import CustomerStore from './Components/CustomerStore';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Productupload from './Components/Productupload';
import ProductAddedScreen from './Components/ProductAddedScreen';
import ProductDetailsScreen from './Components/ProductDetailsScreen';
import CompanyRequest from './Components/companyrequest';
import ContributeWaste from './Components/Contributewaste';
import Companyinterfase from './Components/Companyinterface';
import CompanyStore from './Components/CompanyStore';
import ProductDetailscompany from './Components/ProductDetailscompany';
import Companydetailsdisplay from './Components/companydetailsdisplay';
import Contribute from './Components/contribute';
import CustomerWallet from './Components/customerwallet';
import CompanyWallet from './Components/companywallet';
import WalletPayment from './Components/walletpayment';
import Admininterface from './Components/Admininterface';
import Admincompanydisplay from './Components/admincompanydisplay';
import Adminallcompany from './Components/adminallcompany';
import Adminuserdetialsdispaly from './Components/adminuserdetialsdiaplay';
import Comapnyorderdetails from './Components/companyorderdetails';
const Stack = createNativeStackNavigator();
export function App() {
  return (/*
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='CustomerStore' component={CustomerStore} options={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name='Account' component={Account} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
        <Stack.Screen name='Orders' component={Orders} options={{headerShown:false}}/>
        <Stack.Screen name='Contribution' component={Contribution} options={{headerShown:false}}/>
        <Stack.Screen name='Contribute' component={Contribute} options={{headerShown:false}}/>
        <Stack.Screen name='CustomerPayment' component={CustomerPayment} options={{headerShown:false}}/>

      </Stack.Navigator>
   </NavigationContainer>*/
   /*
   <NavigationContainer>
   <Stack.Navigator initialRoutName="Product">
     <Stack.Screen name="Product" component={Productupload} />
     <Stack.Screen name="ProductAdded" component={ProductAddedScreen}/>
   </Stack.Navigator>
   
 </NavigationContainer> 
 
  <NavigationContainer>
  <Stack.Navigator initialRouteName='ProductList'>
    <Stack.Screen name="ProductList" component={CustomerStore} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    <Stack.Screen name="CustomerCart" component={Cart} />
  </Stack.Navigator>
</NavigationContainer>*/
 <NavigationContainer>
 <Stack.Navigator initialRoutName="Login">
   <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
   <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
   <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
    <Stack.Screen name="ProductList" component={CustomerStore} options={{headerShown:false}}/>
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{headerShown:false}}/>
    <Stack.Screen name="CustomerCart" component={Cart} options={{headerShown:false}}/>
    <Stack.Screen name='CustomerPayment' component={CustomerPayment} options={{headerShown:false}}/>
    <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
    <Stack.Screen name="ContributeWaste" component={ContributeWaste} option={{headerShown:true}}/>
    <Stack.Screen name="Contribute" component={Contribute} option={{headerShown:false}}/>
    <Stack.Screen name="Contribution" component={Contribution} options={{headerShown:false}}/>
    <Stack.Screen name="CustomerWallet" component={CustomerWallet} options={{headerShown:false}}/>
    <Stack.Screen name="CompanyWallet" component={CompanyWallet} options={{headerShown:false}}/>
    <Stack.Screen name="WalletPayment" component={WalletPayment} options={{headershown:false}}/>
    <Stack.Screen name="Product" component={Productupload} />
    <Stack.Screen name="Companyinterfase" component={Companyinterfase} options={{headerShown:false}}/>
    <Stack.Screen name="ProductAdded" component={ProductAddedScreen}/>
    <Stack.Screen name="CompanyStore" component={CompanyStore}/>
    <Stack.Screen name="ProductDetailscompany" component={ProductDetailscompany}/>
    <Stack.Screen name="Admininterface" component={Admininterface}/>
    <Stack.Screen name="Companyrequest" component={CompanyRequest} options={{headerShown:false}}/>
    <Stack.Screen name="Companydetailsdisplay" component={Companydetailsdisplay} options={{headerShown:false}}/>
    <Stack.Screen name="admincompanydisplay" component={Admincompanydisplay} options={{headerShown:false}}/>
    <Stack.Screen name="adminallcompany" component={Adminallcompany} options={{headerShown:false}}/>
    <Stack.Screen name="Adminuserdetialsdispaly" component={Adminuserdetialsdispaly} options={{headerShown:false}}/>
    <Stack.Screen name="Comapnyorderdetails" component={Comapnyorderdetails} options={{headerShown:false}}/>
    <Stack.Screen name='Account' component={Account} options={{headerShown:false}}/>
    <Stack.Screen name='Orders' component={Orders} options={{headerShown:false}}/>
    <Stack.Screen name='Contribution' component={Contribution} options={{headerShown:false}}/>
 </Stack.Navigator>
</NavigationContainer>
/*<NavigationContainer>
  <Stack.Navigator initialRouteName='CompanyRequest'>
    <Stack.Screen name="Companyrequest" component={CompanyRequest} options={{headerShown:false}}/>
    <Stack.Screen name="Companydetailsdisplay" component={Companydetailsdisplay} options={{headerShown:false}}/>
  </Stack.Navigator>
</NavigationContainer>*/
  );
}
export default App;
