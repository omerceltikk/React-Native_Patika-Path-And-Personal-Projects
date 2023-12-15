import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "../../Styles/AuthPage.Style";
import { Formik } from 'formik';
import Loading from '../Loading';
import auth from "@react-native-firebase/auth"
import { showMessage } from 'react-native-flash-message';
const SıgnUpPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const userSignUp = async (values) => {
      try {
        setLoading(true);
       await auth().createUserWithEmailAndPassword(values.email,values.password)
        setLoading(false)
        showMessage({
          message: "Kullanıcı kaydı oluşturuldu",
          type: "success",
        });
        navigation.navigate("LogInPage")
      } catch (error) {
        showMessage({
          message: error.code,
          type: "danger",
        });
        setLoading(false)
      }
    }
  
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.company}>Bookstagram</Text>
        <Formik
          initialValues={{ email: "",username:"", password: "" }}
          onSubmit={values => userSignUp(values)}
        >{({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onBlur={handleBlur("email")}
              placeholder='Type an E-mail...'
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <TextInput
              style={styles.input}
              onBlur={handleBlur("username")}
              placeholder='Type an Username'
              onChangeText={handleChange("username")}
              value={values.username}
            />
            <TextInput
              style={styles.input}
              onBlur={handleBlur("password")}
              placeholder='Password...'
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              value={values.password}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.textColor}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("LogInPage")}>
          <Text style={styles.link}>or go to Log In page!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SıgnUpPage