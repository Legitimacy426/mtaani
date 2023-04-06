import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import useFetchNews from "./hooks/useFetchNews";

import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BusinessCard from "./BusinessCard";
import useFetchBusiness from "./hooks/useFetchBusiness";

const Business = () => {
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("userId")
      .then((userId) => {
        console.log(userId);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [navigation]);
  const route = useRoute();

  // console.log(route.params.userId)
  const Item = ({ item }) => <BusinessCard item={item} />;
  const { posts } = useFetchBusiness('')
  console.log(posts);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.crimes}>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.pid}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  crimes: {
    backgroundColor: "white",
    justifyContent: "center",
  },
});
export default Business;
