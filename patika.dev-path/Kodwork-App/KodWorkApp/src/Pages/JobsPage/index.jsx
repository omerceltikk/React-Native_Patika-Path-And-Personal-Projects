import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch/useFetch'
import { FlatList, ScrollView,View,TouchableOpacity,Text } from 'react-native'
import JobsCard from '../../Components/JobsCard/JobsCard'
import { styles } from './Jobspage.Style'

const Jobs = ({ route, navigation }) => {
  const [page, setPage] = useState(1)
  const {err, loading , data} = useFetch(`https://www.themuse.com/api/public/jobs?page=${page}`,page);
 
  const HandlePress = (id) => {
    navigation.navigate("Detail", { id })
  }
  const renderProduct = ({ item }) => <JobsCard item={item} onPress={() => HandlePress(item.id)} />
  if(loading){
    return(
      <Text>Loading...</Text>
    )
  }else if(err){
    return(
      <Text>{err}</Text>
    )
  }
  return (
    <ScrollView>
      <FlatList scrollEnabled={false} data={data.results} renderItem={renderProduct} />
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

export default Jobs