import React, { useState } from 'react'
import { FlatList, ScrollView,View,TouchableOpacity,Text } from 'react-native'
import JobsCard from '../../Components/JobsCard/JobsCard'
import { styles } from './Comicspage.Style'
import useFetch from "use-http"
// import {PUBLIC_API_KEY,PRIVATE_API_KEY} from "@env"
import Loading from '../Loading'
import Error from '../Error'
import CryptoJS from "crypto-js"
const Comics = ({ route, navigation }) => {
  const [page, setPage] = useState(1)
  const ts = new Date().getTime();  
  // const PUBLIC_API_KEY ="24645151144886463cff4d4cf1f2803d"
  const PRIVATE_API_KEY =""
  const hash = CryptoJS.MD5(ts+ PUBLIC_API_KEY + PRIVATE_API_KEY).toString();
  const {get, post, response, loading, error} = useFetch(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`);
  // const data = get();
  // console.log(data);
  const HandlePress = (id) => {
    navigation.navigate("Detail", { id })
  }
  const renderProduct = ({ item }) => <JobsCard item={item} onPress={() => HandlePress(item.id)} />
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
      {/* <FlatList scrollEnabled={false} data={data.results} renderItem={renderProduct} /> */}
      <View style={styles.buttonArea}>
      <TouchableOpacity disabled={page == 1 ? true : false} onPress={() => {
          setPage(page-1);
        }} style={page == 1 ? styles.disabled : styles.button}>
        <Text style={page == 1 ? styles.disabled : styles.button}>
          Previous Page
          </Text>
          </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          setPage(page+1);
        }} style={styles.button}>
        <Text style={styles.button}>
          Next Page
          </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Comics