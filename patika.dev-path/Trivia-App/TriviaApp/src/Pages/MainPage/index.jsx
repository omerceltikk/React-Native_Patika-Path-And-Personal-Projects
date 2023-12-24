import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import database from "@react-native-firebase/database";
import styles from "./Main.Style"
import RoomCard from '../../Components/MainCard';
import Loading from "../Loading"
import parseData from '../../utils/parseData';
import Button from '../../Components/FloatingButton';
import ContentModal from '../../Components/Modal';
const MainPage = ({navigation}) => {
  const [postData, setPostData] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const data = database().ref("/chatapp/rooms");
  useEffect(() => {
    data.on('value', snapshot => {
      const res = snapshot.val();
      const parsedData = parseData(res);
      setPostData(parsedData);
    });

  }, [])

  function sendContent(data) {
    const contentObj = {
      roomName: data,
      date: new Date().toISOString(),
      texts: ""
    }
    database().ref("/chatapp/rooms").push(contentObj);
  }

  if (postData == null) {
    return (
      <Loading />
    )
  }
  function handleModalToggle() {
    setVisibleModal(!visibleModal);
  }
  function handleSendContent(content) {
    sendContent(content)
    setVisibleModal(false);
  }
  function handlePress(id){
    navigation.navigate("RoomPage", {id: id })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <FlatList scrollEnabled={true} renderItem={(item) => <RoomCard data={item} onPress={() => handlePress(item.item.id)}/>} data={postData} numColumns={2}/> 

      </View>
      <Button onPress={handleModalToggle} />
      <ContentModal
        visible={visibleModal}
        onClose={handleModalToggle}
        onSend={handleSendContent} />
    </SafeAreaView>
  )
}
// }

export default MainPage