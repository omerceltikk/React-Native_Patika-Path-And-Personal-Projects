import React from 'react'
import { View, Text,Image, TouchableOpacity, Linking, Alert, ScrollView } from 'react-native'
import { styles } from './DetailCard'
const DetailCard = ({ item }) => {
const handlePress = (url) => {
  Linking.openURL(url)
}
  return (
    <View style={styles.card}>
    <ScrollView>
      <View style={styles.innerCard}>
      <Image
        style={styles.Image}
        source={{
          uri: item.meals[0].strMealThumb,
        }}
      />
      <Text style={styles.category}>{item.meals[0].strMeal}</Text>
      <Text style={styles.header}>{item.meals[0].strArea}</Text>
      <Text>{item.meals[0].strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress(item.meals[0].strYoutube)}>
        <Text>Go Youtube</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
  </View>
  )
}

export default DetailCard