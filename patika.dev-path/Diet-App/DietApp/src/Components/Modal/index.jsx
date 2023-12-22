import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from "./Modal.Styles"
import DropdownComp from '../Dropdown'
import DatePicker from 'react-native-date-picker'
const ContentModal = ({ visible, onSend, onClose }) => {
  const [meal, setMeal] = useState("")
  const [date, setDate] = useState(new Date())
  const dietDay = [
    "breakfast",
    "lunch",
    "dinner"
  ]
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select meal:</Text>
        <DropdownComp
          onChange={setMeal}
          style={styles.input}
          data={dietDay}
        />
        <Text style={styles.title}>Select Date and Time:</Text>
        <DatePicker date={date} onDateChange={setDate} style={styles.picker} />
        <TouchableOpacity onPress={() => {onSend({ meal, date })}} style={styles.button}>
          <Text style={styles.buttonText}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ContentModal