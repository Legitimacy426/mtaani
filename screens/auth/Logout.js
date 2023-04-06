import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useNavigation } from '@react-navigation/native'


const Logout = () => {
  const navigation = useNavigation()
  useEffect(() => {
    AsyncStorage.removeItem('userId').then(() => {
      signOut(auth).then(() => {
    navigation.navigate("Main")
})
    })
  },[])
  return (
    <View >
      <Text>Logout</Text>
    </View>
  )
}

export default Logout