import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, ImageBackground } from 'react-native'
import { styles } from './MainCard.Style'
const DietCard = ({ data, onPress }) => {
  const image = {uri : data.item.recipe.images.REGULAR.url}
  return (
    <TouchableOpacity key={data.id} onPress={onPress} style={styles.card}>
        <Image source={image} style={styles.image} />
          <Text style={styles.header}>
            {data.item.recipe.label}
          </Text>
      </TouchableOpacity>
  )
}

export default DietCard