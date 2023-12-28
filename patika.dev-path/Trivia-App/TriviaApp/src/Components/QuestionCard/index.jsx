import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from "./QuestionCard.Style";
import Button from '../Button';

const QuestionCard = ({ data, onResults }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timer, setTimer] = useState(25);
  const [points, setPoints] = useState(0);

  const handlePress = useCallback((isCorrect) => {
    if (isCorrect) {
      setPoints((prevPoints) => prevPoints + 50);
    } else {
      setPoints((prevPoints) => prevPoints - 30);
    }
  }, []);
  const handleNewQuestion = useCallback(() => {
    setTimeout(() => {
      setQuestionNumber(nmb => nmb + 1);
      setTimer(25);
    }, 1000);
  }, []);

  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setTimer(25);
      setQuestionNumber(questionNumber + 1);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timer, questionNumber]);

  const currentQuestion = data[questionNumber];
  if (questionNumber > 9) {
    return onResults({
      status: true,
      point: points,
      category: currentQuestion.category
    });
  }
  const incorrectAnswers = currentQuestion.incorrect_answers;
  const correct = currentQuestion.correct_answer;
  const answersData = [...incorrectAnswers, correct];
  return (
    <View>
      <View style={styles.infoArea}>
        <View>
          <Text style={styles.timer}>Question : {questionNumber}</Text>
        </View>
        <View>
          <Text style={styles.timer}>Time : 00:{timer}</Text>
        </View>
        <View>
          <Text style={styles.timer}>Point: {points}</Text>
        </View>
      </View>
    <View style={styles.card}>

      <Text style={styles.header}>
        {currentQuestion.question}
      </Text>

      <View style={styles.buttonArea}>
        {answersData && answersData.map((item, i) => (
          <Button key={i} correctAnswer={correct} data={item} onPress={handlePress} onNewQuestion={handleNewQuestion} />
        ))}
      </View>
    </View>
    </View>
  );
};

export default QuestionCard;