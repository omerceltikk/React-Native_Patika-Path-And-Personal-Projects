import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './ResultPage.Style'
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
const ResultPage = ({ navigation, route }) => {
  const {result}  = route.params
  const user = auth().currentUser.email
  useEffect(() => {
    async function handleFinish() {
        const data = {
          userName : user,
          point: result.point,
          category: result.category
        }
        database().ref("/triviaapp/users").push(data);
    }
    handleFinish()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Congratulations
      </Text>
      <Text style={styles.header}>
        Your Point Is : {result.point}
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