import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from "./CategoriesPage.Style"
import useFetch from '../../hooks/UseFetch/useFetch'
import Loading from '../Loading'
import { showMessage } from 'react-native-flash-message';
import CategoriesCard from '../../Components/CategoriesCard';
import ContentModal from '../../Components/Modal'
const CategoriesPage = ({navigation}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const { data, loading, error } = useFetch("https://opentdb.com/api_category.php");
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
  function handleSendContent(content) {
    const starterData = {
      difficulty : content,
      category: categoryId
    }
    setVisibleModal(false);
    navigation.navigate("GamePage", {starterData: starterData})
  } 
  function handlePress(id){
    setVisibleModal(!visibleModal);
    setCategoryId(id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.textColor}>
          Categories
        </Text>
        <FlatList scrollEnabled={true} renderItem={(item) => <CategoriesCard data={item} onPress={() => handlePress(item.item.id)} />} data={data.trivia_categories} numColumns={2} />
      </View>
      <ContentModal
      visible={visibleModal}
      onClose={() => setVisibleModal(!visibleModal)}
      onSend={handleSendContent} 
      />
    </View>
  )
}

export default CategoriesPage