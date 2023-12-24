import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database"
import styles from "./MessageInput.Style"
const MessageInput = ({ pageid }) => {
  const uid = auth().currentUser;
  const [message, setMessage] = useState("")
  async function handleSend() {
    const currData = {
      user: uid ? uid.email : "guest",
      date: new Date().toISOString(),
      message: message,
    }
    await database().ref(`chatapp/rooms/${pageid}/texts`).push(currData);
    setMessage("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter A Message...'
        onChangeText={setMessage}
        multiline
        value={message}
      />
      <TouchableOpacity onPress={() => handleSend()} style={styles.button}>
        <Text style={styles.buttonText}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessageInput