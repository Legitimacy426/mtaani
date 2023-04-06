import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';


import Home from '../Home';
const Stack = createNativeStackNavigator();
const AuthContainer = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Home" component={Home}
      // options={{headerShown:false}}
      />

    </Stack.Navigator>

  )
}

export default AuthContainer