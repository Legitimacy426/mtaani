import { View, Text, Image, StyleSheet ,FlatList} from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FetchUser from './FetchUser';

const Posts = ({item}) => {
  return (
    <View style={styles.crime}>
    <View style={{}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
          <View style={{ borderWidth: 1, padding: 4, borderRadius: 30 }}>
            <AntDesign name='user' color={"black"} size={19} />
          </View>
          <Text style={{ fontSize: 15 }}>{ item.category}</Text>
        </View>
      </View>
      <Text style={{padding:10,fontSize:15,fontWeight:"bold",color:"#000000a3"}}>{ item.headline}</Text>
    <Image source={{uri : item.image}} style={{ height:300,width:410 }}
    resizeMode="cover"
    />
    <View>
      <View style={{padding:10}}>
          <Text>{ item.description}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Text>{ item.location}</Text>
            <Text style={{}}>Posted on {Date(item.createdAt).slice(0,16) }</Text>
        </View>
        
      </View>
    </View>

</View>
  )
}

const styles = StyleSheet.create({
    crimes: {
      // margin: 10,
      justifyContent:"center"
    },
    crime: {
      borderWidth: 1,
      borderColor:"#0000001b",
      overflow:"hidden",
    
      backgroundColor:"white"
    }
  })
export default Posts