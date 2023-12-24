import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from "./GamePage.Style"
import useFetch from '../../hooks/UseFetch/useFetch';
import { showMessage } from 'react-native-flash-message';
import Loading from '../Loading';
import QuestionCard from '../../Components/QuestionCard';
const GamePage = ({ route,navigation}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(10);
  const { starterData } = route.params;
  const { data, loading, error } = useFetch(`https://opentdb.com/api.php?amount=10&category=${starterData.category}&difficulty=${starterData.difficulty}&type=multiple`);

  const changeQuestion = () => {
    setQuestionNumber(questionNumber + 1)
  }
  useEffect(() => {
    if (questionNumber < 10) {


    }
  }, [questionNumber])

  if (timer == 0) {
    changeQuestion();
    setTimer(10)
  } else {
    setTimeout(() => {
      if (questionNumber < 10) {
        setTimer(timer - 1)
      }else{
        navigation.navigate("ResultPage",{point : points})
      }
    }, 1000);
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
    console.log(result);
  }
  return (
    <View style={styles.container}>
      <QuestionCard onPress={(data) => handlePress(data)} data={data?.results[questionNumber]} />
      <Text>00:{timer}</Text>
    </View>
  )
}

export default GamePage