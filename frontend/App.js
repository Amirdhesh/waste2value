import { StatusBar } from 'react-native';
import Login from './Components/login';
import SignUp from './Components/SignUp';
import Register from './Components/Register';
import CustomerStore from './Components/CustomerStore';
import CustomerNavbar from './Components/CustomerNavbar';
import Cart from './Components/Cart';
import Details from './Components/Details';
import  Orders from './Components/Orders';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    // <Stack.Screen name="Login" component={Login} />
    // </Stack.Navigator>
    // </NavigationContainer>
    <Orders/>
    
  );
}
