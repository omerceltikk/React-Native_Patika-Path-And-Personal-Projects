import React, { useState } from 'react'
import { FlatList, ScrollView,View,TouchableOpacity,Text } from 'react-native'
import ComicsCard from '../../Components/ComicsCard'
import { styles } from './Comicspage.Style'
import useFetch from "use-http"
import Config from 'react-native-config' 
import Loading from '../Loading'
import CryptoJS from "crypto-js"
import Error from '../Error'
const Comics = ({ route, navigation }) => {
  const [page, setPage] = useState(20);
  const ts = new Date().getTime();  
  const hash = CryptoJS.MD5(ts + Config.PRIVATE_API_KEY + Config.PUBLIC_API_KEY ).toString();
  const {loading, error, data = []} = useFetch(`http://gateway.marvel.com/v1/public/comics?limit=${page}&ts=${ts}&apikey=${Config.PUBLIC_API_KEY}&hash=${hash}`,[page]);
  const HandlePress = (id) => {
    navigation.navigate("Detail", { id, "type": "comics" })
  }
  const renderProduct = ({ item }) => <ComicsCard item={item} onPress={() => HandlePress(item.id)} />
  if(loading){
    return(
        <Loading/>
      )
  }else if(error){
    return(
      <Error props={error}/>
    )
  }
  return (
    <ScrollView>
      <FlatList scrollEnabled={false} data={data.data.results} renderItem={renderProduct} />
      <View style={styles.buttonArea}>
    
      <TouchableOpacity disabled={page >= 100 ? true : false} onPress={() => {
          setPage(page < 100 ? page+20 : page);
        }} style={page< 100 ? styles.button : styles.disabled}>
        <Text style={page< 100 ? styles.button : styles.disabled}>
          Load More
          </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Comics