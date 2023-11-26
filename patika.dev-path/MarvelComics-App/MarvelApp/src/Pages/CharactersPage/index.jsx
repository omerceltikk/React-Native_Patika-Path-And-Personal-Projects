import React from 'react'
import { useSelector } from 'react-redux'
import {View,ScrollView,FlatList, StyleSheet,Alert} from 'react-native'
import FavCard from '../../Components/FavCard'
const Characters = ({ navigation }) => {
  const data = useSelector((state) => state.marvel);
  
  const HandlePress = (id) => {
    navigation.navigate("Detail", { id })
  }
  // const renderProduct = ({ item }) => <FavCard item={item} onPress={() => HandlePress(item.id)}  />

  return (
    <View style={styles.container}>
    <ScrollView>
      <FlatList scrollEnabled={false} data={data.data} />  
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#363062",
    flex:1
  }
})
export default Characters