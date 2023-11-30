import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import database from "@react-native-firebase/database";
const MainPage = () => {
  const data = database().ref();
  return (
    <SafeAreaView>
      <Text>
        aasdadad
      </Text>
    </SafeAreaView>
  )
}

export default MainPage