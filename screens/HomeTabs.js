import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{useEffect,useState} from 'react'
import Post from './Post';
import Home from './Home';
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthContainer from './auth/AuthContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logout from './auth/Logout';
import Business from './Business';
import Services from './Services';
import Login from './auth/Login';
import AddBusiness from './AddBusiness';
import AddService from './AddService';
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
const navigation = useNavigation()
const [user,setUser]=useState(null)
  useEffect(() => {
    AsyncStorage.getItem('userId')
    .then((userId)=>{
      if(userId) {
       setUser(userId)
      } else {
      setUser(null)
}
    })
      .catch((e) => {
      alert(e.message)
    })

},[navigation])


     
  return (
    
       <Tab.Navigator>
        <Tab.Screen name="Latest News" component={Home}
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
        <Tab.Screen name="Businesses" component={Business}
       options = {{
        tabBarLabel: "Businesses",
        tabBarOptions: {
          activeTintColor: "#041337",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="business"
              size={24}
              color={tabInfo.focused ? "#041337" : "#8e8e93"}
            />
          );
        },
      }}
        />
        <Tab.Screen name="Services" component={Services}
       options = {{
        tabBarLabel: "Services",
        tabBarOptions: {
          activeTintColor: "#041337",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="md-server-outline"
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
        <Tab.Screen name="Add Business" component={AddBusiness}
        options = {{
          tabBarLabel: "Add business",
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
        options = {{
          tabBarLabel: "Add Service",
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
        {!user &&  (
           <Tab.Screen name="auth" component={AuthContainer} 
           options={{
             headerShown: false,
             
       tabBarLabel: "Login",
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
        )}
          {user && (
           <Tab.Screen name="Logout" component={Logout} 
           options={{
             headerShown: false,
             
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
        )}
        
        
    </Tab.Navigator>
    
   
  );
}



