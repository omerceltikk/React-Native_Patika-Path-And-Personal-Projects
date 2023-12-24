import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from "./QuestionCard.Style"
import Button from '../Button'
const QuestionCard = ({ data, onPress }) => {
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const answersData = data?.incorrect_answers;
  // answersData.push(data?.correct_answer)
useEffect(() => {
  setCorrectAnswer(null);
},[data])
  function handlePress(item,i) {
    if (data.data?.correct_answer == item) {
      setCorrectAnswer({
        isTrue: true,
      })
      return onPress(true)
    } else {
      setCorrectAnswer(false)
      return onPress(false)
    }
  }
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.header}>
          {data?.question}
        </Text>
        <View style={styles.buttonArea}>
          {
            answersData && answersData.map((item, i) => <Button key={i} correctAnswer={correctAnswer} data={item} onPress={() => handlePress(item,i)} />)
          }

        </View>
      </View>
    </>
  )
}

export default QuestionCard