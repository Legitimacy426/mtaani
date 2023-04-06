import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import React, {useState } from 'react'
import useFechtUser from './hooks/useFetchUser'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Profile = () => {
    const { posts: userProfile } = useFechtUser('users')
    console.log(userProfile)
   const navigation = useNavigation()
    const [username,setUsername] = useState()
    const [location,setLocation] = useState()
    
    const handleUpdate = () => {
        
        if (!username || !location) {
            alert("All fields are required")
            return
        }
        const newProfile = {
            username: username,
            location:location,
        }
        const docRef = doc(db, id)
        updateDoc(docRef, newProfile).then(() => { 
            alert("Profile updated successifully")
        })
            .catch((e) => {
            alert(e.message)
        })
    }
    return (
      <View style={styles.wrapper}>
           <ScrollView>
          <View>
              <AntDesign name="user" color={black} size={30} style={{ alignSelf: "center" }} />
              
          </View> 
          <ScrollView>
    <View >
        <Text style={{marginBottom:10}}>Username</Text>
      <TextInput
            style={styles.input}
          placeholder="username"
          onChangeText={(val)=>{setUsername(val)}}
          value={"username"}
            />
        <Text style={{marginBottom:10}}>Location</Text>
      <TextInput
            style={styles.input}
          placeholder="location"
          onChangeText={(val)=>{setLocation(val)}}
        value={"location"}
            />
    
  
          <TouchableOpacity style={styles.login} onPress={handleUpdate}>
                 <Text style={{color:"white"}}> Update</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.login} onPress={navigation.navigate('logout')}>
                 <Text style={{color:"white"}}>Logout</Text>
              </TouchableOpacity>
      </View>     
    </ScrollView>
   </ScrollView>  
      </View>
   
  )
}
const styles = StyleSheet.create({
    container: {
      margin: 20,
    
    },
    wrapper: {
      padding: 20,
      backgroundColor: "white",
      flex: 1
    
    },
   
    input: {
      padding:10,
      marginTop:5,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "white",
      marginBottom: 14,
      borderRadius:5
    },
    login: {
      backgroundColor: "#041337",
      padding: 15,
      
      alignSelf: "center",
      marginTop: 20,
      color: "white",
      borderRadius: 5,
      width: 350,
      justifyContent: "center",
      alignItems:"center"
    },
   
  });


export default Profile