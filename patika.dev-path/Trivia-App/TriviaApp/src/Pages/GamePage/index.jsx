import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from "./GamePage.Style"
import useFetch from '../../hooks/UseFetch/useFetch';
import { showMessage } from 'react-native-flash-message';
import Loading from '../Loading';
import QuestionCard from '../../Components/QuestionCard';
const GamePage = ({ route, navigation }) => {
  const [points, setPoints] = useState(0);
  const { starterData } = route.params;
  const { data, loading, error } = useFetch(`https://opentdb.com/api.php?amount=11&category=${starterData.category}&difficulty=${starterData.difficulty}&type=multiple`);

  const changeQuestion = () => {
    setQuestionNumber(questionNumber + 1)
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
  function handlePress(result) {
      navigation.navigate("ResultPage", {result : result})
  }
  return (
    <View style={styles.container}>
      <QuestionCard onResults={(data) => handlePress(data)} data={data?.results} />
    </View>
  )
}

export default GamePage