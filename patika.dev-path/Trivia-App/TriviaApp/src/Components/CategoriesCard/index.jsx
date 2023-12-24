import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { styles } from './MainCard.Style'
const CategoriesCard = ({ data, onPress }) => {
  return (
    <TouchableOpacity key={data.item.id} onPress={onPress} style={styles.card}>
        <View style={styles.headerArea}>
          <Text style={styles.header}>
            {data.item.name}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CategoriesCard