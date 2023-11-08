import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import { styles } from './CategoryCardStyle'
const CategoryCard = ({ item,onPress }) => {

  return (
    <View key={item.idCategory} style={styles.card}>
      <View style={styles.innerCard}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.strCategoryThumb,
        }}
      />
      <Text style={styles.category}>{item.strCategory}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.button}>
          Explore!
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default CategoryCard