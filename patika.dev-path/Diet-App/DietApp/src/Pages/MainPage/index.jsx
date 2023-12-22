import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import database from "@react-native-firebase/database";
import DietCard from '../../Components/MainCard';
import Loading from "../Loading"
import DropdownComp from '../../Components/Dropdown';
import useFetch from '../../hooks/UseFetch/useFetch';
import { showMessage } from 'react-native-flash-message';
import getUserInfoFromDb from '../../hooks/getUserDb/getUserDb';
import styles from "./Main.Style"
const MainPage = ({ navigation }) => {
  const [dropdownValue, setDropdownValue] = useState(null)
  const currentUser = getUserInfoFromDb()
  const { data, loading, error } = useFetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=60cd5ca1&app_key=9567044d0c4ee0b57db4f338732a35ba&diet=high-protein&random=true
  `)
  function handlePress(data){
    navigation.navigate("DetailPage", {receipeData: data , fromReceipe: true})
  }
  if (loading) {
    return (
      <Loading />
    )
  }
  if (error) {
    showMessage({
      message: JSON.stringify(error),
      type: "danger",
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recommended Receipes For You:</Text>
      {/* <Text>Title: {userData.findUser?.activity}</Text> */}
      <View>
        {/* <DropdownComp
          onChange={setDropdownValue}
          value={dropdownValue}
        /> */}
      </View>
       <View style={styles.main}>
       <FlatList scrollEnabled={true} numColumns={2} renderItem={(item) => <DietCard data={item} onPress={() => handlePress(item.item)} />} data={data.hits} />
       </View>
    </SafeAreaView>
  )
}
// }

export default MainPage