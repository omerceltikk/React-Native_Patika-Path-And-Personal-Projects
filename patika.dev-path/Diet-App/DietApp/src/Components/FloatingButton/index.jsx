import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from "./FloatingButton.Style"
const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.icon}>
        +
      </Text>
      </TouchableOpacity>
    )
}

export default Button