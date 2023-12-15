import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './MainCard.Style'
const RoomCard = (data) => {
  const HandlePress = () => {
    dispatch(addFavorites(item));
  }
  return (
    <View key={data.id} style={styles.card}>
      <View style={styles.generalCard}>
        <View style={styles.headerArea}>
          <Text style={styles.header}>
            {JSON.stringify(data)}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RoomCard