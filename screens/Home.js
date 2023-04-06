import { View, Text, Image, StyleSheet ,FlatList,ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React,{useEffect,useState} from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import useFetchNews from './hooks/useFetchNews';
import Posts from './Posts';
import { useNavigation, useRoute } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

  const navigation = useNavigation()
  useEffect(() => {
   reload()
  }, [navigation])
  const [user,setUser] = useState('')
  const route = useRoute()
  const reload = () => {
    AsyncStorage.getItem('userId')
    .then((userId) => {
      console.log(userId)
      setUser(userId)
     
    }).catch((e) => {
    console.log(e.message)
  })
  }
// console.log(route.params.userId)
  const Item = ({ item }) => (
    <Posts item = {item} />
  )
const {posts} = useFetchNews('posts')
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
    
      justifyContent:"center"
    },
  
  })
export default Home