import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './admin/Index';
import { MainTabs } from './admin/adminTab/MainTab';
import Main from './Main';
import Home from './Home';
import Login from './auth/Login';

const Stack = createNativeStackNavigator();
const AdminStack = () => {
  return (

      <Stack.Navigator>
              <Stack.Screen name="Admin Login" component={Index} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Admin Dashboard" component={MainTabs} />
    </Stack.Navigator>    

  )
}

export default AdminStack