import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "./Button.Style";

const Button = ({ data, onPress, correctAnswer,onNewQuestion }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [wrong, setWrong] = useState(null)
  useEffect(() => {
    setIsPressed(false);
    setWrong(null)
  }, [correctAnswer]);

  const handlePress = () => {
    setIsPressed(true);
    onNewQuestion();
    if (correctAnswer != data) {
      onPress(false);
      setWrong(true);
    }else{
      setWrong(false)
      onPress(true);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      disabled={isPressed}
      style={wrong == null ? styles.card : wrong ? [styles.card, styles.wrong] : [styles.card, styles.correct]}
    >
      <Text style={styles.header}>
        {data}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;