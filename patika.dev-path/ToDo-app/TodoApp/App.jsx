/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './styles';
import { FlatList,ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ListItem = ({ item }) => (
  <View style={styles.todoList}>
    <Text style={styles.todoTitle}>{item.title}</Text>
    <Text style={styles.todoItem}>{item.todo}</Text>
  </View>
)

function App() {
  const [title, setTitle] = useState("")
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlePress = () => {
    setTodoList([...todoList, {
      "id": Math.floor(Math.random() * 1000000),
      "title": title,
      "todo": todo,
      "date": Date.now()
    }]);
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          To Do App
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>
            Title
          </Text>
          <TextInput id='title' style={styles.input} onChangeText={setTitle} value={title} />
          <Text style={styles.title}>
            ToDo
          </Text>
          <TextInput
            id='todo'
            style={styles.input}
            onChangeText={setTodo}
            value={todo}
          />
          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.todoList}>
            <Text style={styles.head}>Title</Text>
            <Text style={styles.head}>Todo</Text>
          </View>
          <FlatList
            data={todoList.sort((a, b) => b.date - a.date)}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => <ListItem item={item} />}
          />
        </View>

      </ScrollView>
    </>

  );
}



export default App;
