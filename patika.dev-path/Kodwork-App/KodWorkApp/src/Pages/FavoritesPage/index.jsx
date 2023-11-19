import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View,ScrollView,FlatList, StyleSheet,Alert} from 'react-native'
import FavCard from '../../Components/FavCard'
const Favorites = () => {
  const data = useSelector((state) => state.jobs);
  
  const renderProduct = ({ item }) => <FavCard item={item} onPress={() => HandlePress()}  />
  return (
    <View style={styles.container}>
    <ScrollView>
      <FlatList scrollEnabled={false} data={data.data} renderItem={renderProduct} />  
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
export default Favorites