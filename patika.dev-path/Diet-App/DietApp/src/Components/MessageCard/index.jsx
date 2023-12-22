import React from 'react'
import { Text, View } from 'react-native'
import styles from "./MessageCard.Style"
import { formatDistance, parseISO } from 'date-fns'
import auth from "@react-native-firebase/auth"
import { tr } from "date-fns/locale"
const MessageCard = (data) => {
  const user = auth().currentUser.email
  const formattedDate = formatDistance(parseISO(data.item.date), new Date(), {
    addSuffix: true,
    locale: tr
  })
  return (
    <View key={data.item.id}
      style={user == data.item.user ? styles.currentUser.container : styles.otherUsers.container}>
      <Text style={user == data.item.user ? styles.currentUser.text : styles.otherUsers.text}>
        {data.item.message}
      </Text>
      <Text style={user == data.item.user ? styles.currentUser.date : styles.otherUsers.date}>
        {data.item.user}
      </Text>
      <Text style={user == data.item.user ? styles.currentUser.date : styles.otherUsers.date}>
        {formattedDate}
      </Text>
    </View>
  )
}

export default MessageCard