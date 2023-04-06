import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../Home'
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';

// import AuthContainer from './screens/auth/AuthContainer';
import AddBusiness from './AddBusiness';
import AddService from './AddService';
import Logout from '../../auth/Logout';

import Businnesses from './Businnesses';
import Services from './Services';
import Post from './Post';
const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
   
       <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
       options = {{
        tabBarLabel: "Posts",
        tabBarOptions: {
          activeTintColor: "#041337",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="md-home"
              size={24}
              color={tabInfo.focused ? "#041337" : "#8e8e93"}
            />
          );
        },
      }}
        />
        <Tab.Screen name="Add post" component={Post}
        options = {{
          tabBarLabel: "Add News",
          tabBarOptions: {
            activeTintColor: "#041337",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign
                name="plussquare"
                size={24}
                color={tabInfo.focused ? "#041337" : "#8e8e93"}
              />
            );
          },
        }}
        />
      <Tab.Screen name="Add Service" component={AddService} 
          options={{
            headerShown: true,
            
      tabBarLabel: "Add Service",
            tabBarOptions: {
     
        activeTintColor: "#041337",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <AntDesign
            name="customerservice"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
        );
      },
    }}
        />
      <Tab.Screen name="Add Business" component={AddBusiness} 
          options={{
            headerShown: true,
            
      tabBarLabel: "Add Business",
            tabBarOptions: {
     
        activeTintColor: "#041337",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="md-business-sharp"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
        );
      },
    }}
        />
      <Tab.Screen name="Business" component={Businnesses} 
          options={{
            headerShown: true,
            
      tabBarLabel: "Business",
            tabBarOptions: {
     
        activeTintColor: "#041337",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="md-business-sharp"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
        );
      },
    }}
        />
      <Tab.Screen name="Services" component={Services} 
          options={{
            headerShown: true,
            
      tabBarLabel: "services",
            tabBarOptions: {
     
        activeTintColor: "#041337",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <AntDesign
          name="customerservice"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
        );
      },
    }}
        />
      <Tab.Screen name="Logout" component={Logout} 
          options={{
            headerShown: true,
            
      tabBarLabel: "Logout",
            tabBarOptions: {
     
        activeTintColor: "#041337",
      },
      tabBarIcon: (tabInfo) => {
        return (
          <AntDesign
            name="login"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
        );
      },
    }}
        />
        
    </Tab.Navigator>
    
   
  );
}



