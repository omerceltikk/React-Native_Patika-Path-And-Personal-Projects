import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import database from "@react-native-firebase/database";
import styles from "./Main.Style"
import PostsCard from '../../Components/MainCard';
import Loading from "../Loading"
import parseData from '../../utils/parseData';
const MainPage = () => {
  const [postData, setPostData] = useState(null)
  const data = database().ref("/bookstagram/posts");
  useEffect(() => {
    data.on('value', snapshot => {
    const res =  snapshot.val();
    const parsedData = parseData(res);
    setPostData(parsedData);
  });
 
  },[])

  if(postData == null) {
    return(
      <Loading/>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}> 
       <FlatList scrollEnabled={true} renderItem={PostsCard} data={postData}/> 
      </View>
    </SafeAreaView>
  )
}
// }

export default MainPage