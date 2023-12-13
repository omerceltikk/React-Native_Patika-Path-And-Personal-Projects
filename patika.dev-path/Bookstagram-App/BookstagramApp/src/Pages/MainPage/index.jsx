import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import database from "@react-native-firebase/database";
import styles from "./Main.Style"
import PostsCard from '../../Components/MainCard';
import Loading from "../Loading"
const MainPage = () => {
  const [postData, setPostData] = useState(null)
  const data = database().ref("/bookstagram/posts");
  // data.on('value', snapshot => {
  //   const res =  snapshot.val();
  //   setPostData([res])
  // });
  // if(postData == null) {
  //   return(
  //     <Loading/>
  //   )
  // }else{
  // console.log(postData);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}> 
      {/* <FlatList scrollEnabled={false} renderItem={PostsCard} data={postData}/>
      <Text>
        {
          JSON.stringify(postData)
        }
      </Text> */}
      <PostsCard/>
      </View>
    </SafeAreaView>
  )
}
// }

export default MainPage