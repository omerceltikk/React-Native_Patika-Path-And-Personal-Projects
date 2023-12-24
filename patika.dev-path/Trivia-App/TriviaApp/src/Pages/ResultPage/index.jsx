import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './ResultPage.Style'
const ResultPage = ({ navigation, route }) => {
  // const { points } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Congratulations
      </Text>
      <Text style={styles.header}>
        Your Point Is : 
      </Text>
      <Image
          source={require("../../../assets/pngegg.png")}
          style={styles.imageStyle}
        />
       <TouchableOpacity onPress={() => {
          navigation.navigate("MainPage");
        }} style={styles.button}>
          <Text style={styles.textColor}>Go To Main Page</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ResultPage