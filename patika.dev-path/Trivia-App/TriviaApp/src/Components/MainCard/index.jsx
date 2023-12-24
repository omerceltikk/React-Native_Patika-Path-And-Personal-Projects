import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { styles } from './MainCard.Style'
const RoomCard = ({ data }) => {
 
    console.log(data.item);
  
  return (
    <View key={data.id} style={styles.card}>
        <View style={styles.headerArea}>
          <Text style={styles.header}>
            {data.item.userName.split("@",1)}
          </Text>
          <Text style={styles.title}>
            {data.item.category}
          </Text>
          <Text style={styles.header}>
            {data.item.point}
          </Text>
      </View>
    </View>
  )
}

export default RoomCard