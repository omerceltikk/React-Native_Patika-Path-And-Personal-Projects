import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import { styles } from './CategoryCardStyle'
const ListedCategoryCard = ({ item,onPress }) => {

  return (
    <View key={item.idCategory} style={styles.card}>
      <View style={styles.innerCard}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.strMealThumb,
        }}
      />
      <View style={styles.innerView}>
      <Text style={styles.category}>{item.strMeal}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.button}>
          Explore!
          </Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default ListedCategoryCard