import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from "./Modal.Styles"
const ContentModal = ({ visible, onSend, onClose }) => {
  const [text, setText] = useState("")
  return (
    <Modal
    style={styles.modal}
     isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter A Room Name...'
          onChangeText={setText}
          // multiline
        />
        <TouchableOpacity onPress={() =>onSend(text)} style={styles.button}>
          <Text style={styles.buttonText}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ContentModal