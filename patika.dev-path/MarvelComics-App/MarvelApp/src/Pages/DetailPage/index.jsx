import React from 'react'
import {ScrollView,useWindowDimensions, Text} from "react-native"
const DetailPage = ({route}) => {
  const {id} = route.params;
  
  const {width} = useWindowDimensions();
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
    <ScrollView style={{flex:1}}>

    </ScrollView>
  )
}

export default DetailPage