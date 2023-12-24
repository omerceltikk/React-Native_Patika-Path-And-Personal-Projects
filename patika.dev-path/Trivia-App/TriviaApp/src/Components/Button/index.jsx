import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from "./Button.Style"
const Button = ({ data, onPress, correctAnswer }) => {
  // console.log(data);

  return (
    <TouchableOpacity onPress={onPress} disabled={correctAnswer != null && true} style={correctAnswer == null ? [styles.card] : correctAnswer == true ? [styles.card,styles.correct] : [styles.card,styles.wrong] }>
      <Text style={styles.header}>
        {data}
      </Text>
    </TouchableOpacity>
  )
}

export default Button