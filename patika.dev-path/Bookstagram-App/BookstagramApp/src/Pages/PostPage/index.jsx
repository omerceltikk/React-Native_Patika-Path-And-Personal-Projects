import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import database from "@react-native-firebase/database"
import { Formik } from 'formik';
import Loading from '../Loading';
import Error from '../Error';
import styles from "./Post.Style";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import auth from "@react-native-firebase/auth"

const PostPage = () => {
  const [currError, setCurrError] = useState(null);
  const [currUri, setCurrUri] = useState(null);
  const newRef = database().ref("/bookstagram/posts").push();
  const user = auth().currentUser
  const handleBookDatabase = (values) => {
    if (currUri != null) {
      newRef.set({
        bookName: values.bookName,
        author: values.author,
        image: currUri,
        title: values.title,
        userid: user.uid,
      })
    } else {
      setCurrError("failed to upload image!")
    }
  }
  async function handleImagePick(value) {
    let result;
    if (value == "camera") {
      result = await launchCamera();
    } else if (value == "gallery") {
      result = await launchImageLibrary();
    }
    if (result.didCancel || result.error) {
      await result.didCancel ? setCurrError("Image upload canceled. You did not upload any Image") : setCurrError(result.error)
    } else {
      setCurrError(null);
      await setCurrUri(result?.assets[0].uri ? result?.assets[0].uri : result?.assets[0].originalPath);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Formik
          initialValues={{ bookName: "", author: "", title: "" }}
          onSubmit={values => handleBookDatabase(values)}
        >{({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text style={styles.heading}>Book Name:</Text>
            <TextInput
              style={styles.input}
              onBlur={handleBlur("bookName")}
              placeholder='Type Book Name'
              onChangeText={handleChange("bookName")}
              value={values.bookName}
              placeholderTextColor={"#000"}
            />
            <Text style={styles.heading}>Author:</Text>
            <TextInput
              placeholderTextColor={"#000"}
              style={styles.input}
              onBlur={handleBlur("author")}
              placeholder='Author...'
              onChangeText={handleChange("author")}
              value={values.author}
            />
            <View style={styles.buttonArea}>
              <TouchableOpacity onPress={() => handleImagePick("camera")} style={styles.chooseImage}>
                <Text style={styles.textColor}>Take a Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleImagePick("gallery")} style={styles.takePic}>
                <Text style={styles.textColor}>Choose Image</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Book Title:</Text>
            <TextInput
              placeholderTextColor={"#000"}
              multiline={true}
              numberOfLines={5}
              style={styles.textArea}
              onBlur={handleBlur("title")}
              placeholder='title...'
              onChangeText={handleChange("title")}
              value={values.title}
              textAlignVertical="top"
            />
            <TouchableOpacity disabled={currError ? true : false} onPress={handleSubmit} style={styles.button}>
              <Text style={styles.textColor}>Post It</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
        {
          currError && <Text style={styles.error}>{currError}</Text>
        }
      </View>
    </View>
  )
}

export default PostPage