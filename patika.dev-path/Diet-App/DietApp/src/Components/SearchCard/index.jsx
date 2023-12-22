import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from "./SearchCards.Style"

const SearchCard = (data) => {
  const imageUri = data.data.item.food.image != null ? { uri: data.data.item.food.image } : require("../../../assets/logo1.png")
  const array = Object.values(data.data.item.food.nutrients)
  const newNutri = array.map((item) => item.toString().length > 5 ? item.toString().slice(0, 5) : item)
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.imageStyle} />
      <View style={styles.headerArea}>
        <View style={styles.headerGroup}>
          <Text style={styles.title}>
            {data.data.item.food.label}
          </Text>
          <TouchableOpacity onPress={data.onPress}>
            <Text style={styles.button}>
              Add To List
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoArea}>
          <ScrollView style={styles.scrollArea} horizontal={true}>
            <Text style={styles.tag}>
              Kcal:  {newNutri[0]}cal
            </Text>
            <Text style={styles.tag}>
              Protein: {newNutri[1]}gr
            </Text>
            <Text style={styles.tag}>
              Yağ/Fat: {newNutri[2]}gr
            </Text>
            <Text style={styles.tag}>
              Karbonhidrat: {newNutri[3]}gr
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default SearchCard