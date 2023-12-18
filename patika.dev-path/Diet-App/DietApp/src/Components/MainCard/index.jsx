import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { styles } from './MainCard.Style'
const RoomCard = ({ data, onPress }) => {
  const HandlePress = () => {
    console.log(data);
  }
  return (
    <TouchableOpacity key={data.id} onPress={onPress} style={styles.card}>
      <View style={styles.generalCard}>
        <View style={styles.headerArea}>
          <Text style={styles.header}>
            {data.item.roomName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RoomCard