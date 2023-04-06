
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import AdminStack from './screens/AdminStack'
import Home from './screens/Home';
import HomeTabs from './screens/HomeTabs';
import { MainTabs } from './screens/admin/adminTab/MainTab';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
<NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}
        options={{headerShown:false}}
        />
        <Stack.Screen name="Home" component={HomeTabs}
        options={{headerShown:false}}
        />
        <Stack.Screen name="AdminTabs" component={MainTabs}
        options={{headerShown:false}}
        />
        <Stack.Screen name="AdminStack"
          component={AdminStack}
        options={{headerShown:false}}
        />
        <Stack.Screen name="Login"
          component={Login}
        options={{headerShown:true}}
        />
        <Stack.Screen name="Register"
          component={Register}
        options={{headerShown:true}}
        />
      

    </Stack.Navigator>  
</NavigationContainer>


  )
}

export default App