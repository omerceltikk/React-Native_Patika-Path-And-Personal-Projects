import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import database from "@react-native-firebase/database";
import styles from "./Main.Style"
import RoomCard from '../../Components/MainCard';
import Loading from "../Loading"
import parseData from '../../utils/parseData';
import ContentModal from '../../Components/Modal';
const MainPage = ({ navigation }) => {
  const [postData, setPostData] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const data = database().ref("/triviaapp/users");
  useEffect(() => {
    data.on('value', snapshot => {
      const res = snapshot.val();
      const parsedData = parseData(res);
      setPostData(parsedData);
    });

  }, [])

  // function sendContent(data) {
  //   const contentObj = {
  //     roomName: data,
  //     date: new Date().toISOString(),
  //     texts: ""
  //   }
  //   database().ref("/chatapp/rooms").push(contentObj);
  // }

  if (postData == null) {
    return (
      <Loading />
    )
  }

  // function handleSendContent(content) {
  //   sendContent(content)
  //   setVisibleModal(false);
  // }
  function handlePress(id) {
    navigation.navigate("RoomPage", { id: id })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("../../../assets/leaderboard.png")}
          style={styles.imageStyle}
        />
        <View style={styles.leadershipArea}>
          <Text style={styles.textColor}>LeaderBoard</Text>
          <View style={styles.headerArea}>
            <Text style={styles.innerHeader}>User Name:</Text>
            <Text style={styles.innerHeader}>Category:</Text>
            <Text style={styles.innerHeader}>Points:</Text>
          </View>
          <FlatList scrollEnabled={true} renderItem={(item) => <RoomCard data={item} />} data={postData} numColumns={1} />
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate("CategoriesPage");
        }} style={styles.button}>
          <Text style={styles.textColor}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
// }

export default MainPage