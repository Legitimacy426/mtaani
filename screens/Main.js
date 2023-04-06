import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

const Main = () => {
    const navigation = useNavigation()
  return (

     <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', 'black']}
        style={styles.container}>
              <View>
                 <View style={{alignSelf:"center",marginBottom:100,marginTop:50}}>
                 <Text style={{fontSize:55,color:"white",alignSelf:"center",fontWeight:"bold"}}>Stay Informed</Text>
                  <Text style={{fontSize:55,color:"white",alignSelf:"center",fontWeight:"bold"}}>from Day One</Text>
                  <Text style={{fontSize:25,color:"white",alignSelf:"center"}}>Discover the Latest News with our </Text>
                  <Text style={{fontSize:25,color:"white",alignSelf:"center"}}>Seamless Onboarding Experience</Text>    
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Login")}}>
                  <Text>Continue to News Desk</Text>
                  <AntDesign name='arrowright' size={20} color={"black"} />
              </TouchableOpacity>    
              <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AdminStack")}}>
                  <Text>Continue as Admin</Text>
                  <AntDesign name='arrowright' size={20} color={"black"} />
              </TouchableOpacity>    
      </View>
      </LinearGradient>
  
  
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor:"white"
    },
    button: {
        width: 300,
        backgroundColor:"white",
        borderColor: "#041337",
        borderWidth: 1,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        marginBottom: 10,
        alignSelf:"center"
        
        
    }
})
export default Main