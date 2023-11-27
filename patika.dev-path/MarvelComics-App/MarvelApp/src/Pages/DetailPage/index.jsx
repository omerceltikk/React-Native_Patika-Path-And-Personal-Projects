import React from 'react'
import {ScrollView,useWindowDimensions, Text} from "react-native";
import CryptoJS from "crypto-js"
import useFetch from "use-http"
import Config from 'react-native-config' 
import Loading from '../Loading'
import Error from '../Error'

const DetailPage = ({route}) => {
  const {id,type} = route.params;
  const ts = new Date().getTime();  
  const hash = CryptoJS.MD5(ts + Config.PRIVATE_API_KEY + Config.PUBLIC_API_KEY ).toString();
  const {loading, error, data = []} = useFetch(`http://gateway.marvel.com/v1/public/${type}/${id}?ts=${ts}&apikey=${Config.PUBLIC_API_KEY}&hash=${hash}`,[]);
  if(loading){
    return(
        <Loading/>
      )
  }else if(error){
    return(
      <Error props={error}/>
    )
  }  return (
    <ScrollView style={{flex:1}}>
      <Text>
        {JSON.stringify(data)}
        </Text>
    </ScrollView>
  )
}

export default DetailPage