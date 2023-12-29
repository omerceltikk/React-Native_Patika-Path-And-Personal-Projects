import React, { useEffect, useState } from 'react'
// import useFetch from '../../hooks/UseFetch/useFetch'
import { ScrollView, View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import GetLocation from 'react-native-get-location'
import MapView from "react-native-maps"
// import JobsCard from '../../Components/JobsCard/JobsCard'
import { styles } from './Jobspage.Style'
const Map = () => {
  const [loading, setLoading] = useState(true);
  const [locationErr, setLocationErr] = useState(null);
  const [location, setLocation] = useState({
    isPermissionCompleted: false,
    latitude: 0,
    longitude: 0,
    restaurantList: []
  })

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
    .then(res => {
      setLocation({
        isPermissionCompleted: true,
        latitude: res.latitude,
        longitude: res.longitude
      });
      setLoading(false);
    }).catch(error => {
      setLocationErr(error)
    }, [])

  // const {err, loading , data} = useFetch(`https://www.themuse.com/api/public/jobs?page=${page}`,page);

  // const renderProduct = ({ item }) => <JobsCard item={item} />
  // if(loading){
  //   return(
  //     <Text>Loading...</Text>
  //   )
  // }else if(err){
  //   return(
  //     <Text>{err}</Text>
  //   )
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  )
}

export default Map