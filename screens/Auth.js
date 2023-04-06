import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Auth = () => {
    const navigation = useNavigation()
    useEffect(() => {
        AsyncStorage.getItem('userId').then((userId) => {
            if (userId) {
          return true
            } else {
              return false
        }
        })
          .catch((e) => {
        console.log(e.message)
      })
})
  return (
    <View>
      <Text>Auth</Text>
    </View>
  )
}

export default Auth