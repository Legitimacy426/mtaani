import { View, Text, Image, StyleSheet ,FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';


const BusinessCard = ({ item }) => {
  const handleUpdate = (id) => {
  
    const docRef = doc(db,"businesses", id)
    updateDoc(docRef, {
      status:"verified"
    }).then(() => {
      alert("Business verified successifully")
    }).catch((e) => {
      alert(e.message)
    })
  }
  return (
 <View style={styles.crime}>
<Image source={{ uri: item.image }} style={styles.image}
    resizeMode="cover"
    />
          <View style={{flex:1,backgroundColor:"white"}}>
              <View style={{flexDirection:"row"}}>
                  <Text>{item.category} . </Text>
                  <Text>{item.businessName}</Text>
              </View>
              <Text style={{ flex: 1,fontWeight: "bold",fontSize:17,marginTop:4 }}>
              {item.description}
              </Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row"}}>
                      <Entypo name='location-pin' size={15} color={"#00000078"} />
                      <Text style={{color:"#00000078"}}> {item.location}</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                      <Entypo name='phone' size={15} color={"#00000078"} />
                      <Text style={{color:"#00000078"}}> {item.phone}</Text>
          </View>
          <View>
          <TouchableOpacity
              onPress={()=>{handleUpdate(item.id)}}
              style={{borderColor:"green",borderWidth:1,marginLeft:5,borderRadius:5,padding:2}}
            >
              <Text>
                Verify
              </Text>
            </TouchableOpacity>
          </View>
              </View>
          </View>  

</View>
  )
}

const styles = StyleSheet.create({
    crimes: {
    //   margin: 10,
      justifyContent:"center"
    },
    crime: {
      borderTopWidth: 1,
      borderColor:"#0000001b",
      marginTop:10,
     padding:10,
      flexDirection:"row",

      backgroundColor:"white"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 5,
        marginRight:5,
    }
  })
export default BusinessCard