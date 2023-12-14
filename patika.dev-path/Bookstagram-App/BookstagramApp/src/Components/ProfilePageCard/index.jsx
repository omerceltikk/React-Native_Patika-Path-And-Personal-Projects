import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from "./ProfilePageCard.Style.js"
const ProfilePageCard = (data) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Image style={styles.image} source={{ uri: `${data.item.image}` }} />
          <View style={styles.inner}>
            <Text style={styles.bookname}>
              {data.item.bookName}
            </Text>
            <Text style={styles.date}>
              {data.item.date}
            </Text>
          </View>
        </View>
        <Text style={styles.title}>
          {data.item.title.slice(0,140)}...
        </Text>
      </View>

    </View>
  )
}

export default ProfilePageCard