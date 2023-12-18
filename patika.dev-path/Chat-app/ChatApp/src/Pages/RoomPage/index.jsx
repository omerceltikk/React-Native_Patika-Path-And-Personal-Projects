import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from "./Room.Style"
import database from "@react-native-firebase/database"
import parseData from '../../utils/parseData'
import MessageInput from '../../Components/MessageInput'
import MessageCard from '../../Components/MessageCard'
import Loading from '../Loading'
const RoomPage = ({ navigation, route }) => {
  const [texts, setTexts] = useState(null);
  const { id } = route.params
  const db = database().ref(`chatapp/rooms/${id}`)
  useEffect(() => {
    try {
      db.on("value", snapshot => {
        const res = snapshot.val();
        if(!res){
          return;
        }
        const parsedData = parseData(res.texts)
        console.log(parsedData);
        setTexts(parsedData);
      })
    } catch (error) {
      return(
        <Error/>
      )
    }
  }, [])
  if(texts == null) {
    return(
      <Loading/>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <FlatList data={texts.reverse()} renderItem={MessageCard} />
      </View>
      <MessageInput pageid={id} />
    </View>
  )
}

export default RoomPage