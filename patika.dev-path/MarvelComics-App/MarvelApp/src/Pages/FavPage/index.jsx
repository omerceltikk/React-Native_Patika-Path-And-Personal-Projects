import React from 'react'
import { View,Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import FavCard from "../../Components/FavCard"
import { styles } from './FavPage.Style'
const FavPage = () => {
  const data = useSelector((state) => state.marvel);
  console.log(data.data);
  const renderItem = ({item}) => <FavCard item={item}/>
if(data.data.length == 0){
  return(
    <Text>You did not have any favorites item yet</Text>
  )
}else{
  return (
    <View style={styles.container}>
      <FlatList renderItem={renderItem} data={data.data}/>
    </View>
    )
  }
}

export default FavPage