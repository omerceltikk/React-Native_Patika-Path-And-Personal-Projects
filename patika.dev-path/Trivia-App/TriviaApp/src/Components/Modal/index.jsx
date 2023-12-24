import React, { useState } from 'react'
import { View,TouchableOpacity, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from "./Modal.Styles"
import DropdownComp from '../Dropdown'
const ContentModal = ({ visible, onSend, onClose }) => {
  const [difficulty, setDifficulty] = useState("easy")
  const difficulties = [
    "easy",
    "medium",
    "hard"
  ]
  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select difficulty:</Text>
        <DropdownComp
          onChange={setDifficulty}
          style={styles.input}
          data={difficulties}
        />
        <TouchableOpacity onPress={() => {onSend( difficulty)}} style={styles.button}>
          <Text style={styles.buttonText}>
            Start!
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ContentModal