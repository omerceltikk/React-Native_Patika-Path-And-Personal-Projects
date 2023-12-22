import React, { useEffect, useState } from 'react'
import { View, TextInput, FlatList } from 'react-native'
import styles from "./SearchPage.Style"
import useFetch from '../../hooks/UseFetch/useFetch';
import { showMessage } from 'react-native-flash-message';
import Loading from '../Loading';
import SearchCard from '../../Components/SearchCard';
import ContentModal from '../../Components/Modal';
import getUserInfoFromDb from '../../hooks/getUserDb/getUserDb';
import database from "@react-native-firebase/database"
const SearchPage = ({ navigation }) => {
  const [food, setFood] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const [currFood, setCurrFood] = useState(null)
  const { data, loading, error } = useFetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=b4d24871&app_key=d449d7b012072ddccc449eb29c1fcf9f&ingr=${food}`, food)
  const user = getUserInfoFromDb()
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
  function handlePress(item) {

  }
  function handleModalToggle(data) {
    setVisibleModal(!visibleModal);
    setCurrFood(data)
  }

  function sendContent(item) {
    const contentObj = {
      meal:item.meal,
      mealTime:item.date.toString(),
      mealData:currFood,
    }
    database().ref(`/dietapp/users/${user._j.findUser.id}/dietData`).push(contentObj);
  }
  function handleSendContent(content) {
    sendContent(content)
    setVisibleModal(false);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // onBlur={handleBlur("email")}
        placeholder='Search Food...'
        onChangeText={setFood}
        value={food}
      />
      <FlatList scrollEnabled={true} numColumns={1} renderItem={(item) => <SearchCard data={item}
       onPress={() => handleModalToggle(item)} />} data={data?.hints} />
      <ContentModal
        visible={visibleModal}
        onClose={handleModalToggle}
        onSend={handleSendContent} />
    </View>
  )
}

export default SearchPage