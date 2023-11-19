import React from 'react'
import {ScrollView,useWindowDimensions, Text} from "react-native"
import useFetch from '../../hooks/UseFetch/useFetch';
import RenderHTML from 'react-native-render-html';
const DetailPage = ({route}) => {
  const {id} = route.params;
  const {loading,err,data} = useFetch(`https://www.themuse.com/api/public/jobs/${id}`)
  const html = `${data.contents}`
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
      <RenderHTML contentWidth={width} source={{html}}/>
    </ScrollView>
  )
}

export default DetailPage