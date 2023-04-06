import { View, Text, Image, StyleSheet ,FlatList, ScrollView} from 'react-native'
import React,{useEffect} from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";


import { useNavigation, useRoute } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

import ServiceCard from './ServiceCard';
import useFetchAdminServices from './hooks/useFetchAdminServices';


const Services = () => {
 
  const navigation = useNavigation()
  useEffect(() => {
    AsyncStorage.getItem('userId')
      .then((userId) => {
      console.log(userId)
      }).catch((e) => {
      console.log(e.message)
    })
},[navigation])
  const route = useRoute()
  
// console.log(route.params.userId)
  const Item = ({ item }) => (
    <ServiceCard item = {item} />
  )
const {posts} = useFetchAdminServices()
  console.log(posts)
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
         <View style={styles.crimes}>
    
    <FlatList data={posts}
            renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.pid} />
    </View>
      </ScrollView>
      
    </View>
   
  )

}

  const styles = StyleSheet.create({
    crimes: {
      // margin: 10,
      justifyContent:"center"
    },
  
  })
export default Services