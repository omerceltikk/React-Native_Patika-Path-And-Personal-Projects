import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from "../../Styles/AuthPage.Style";
import { Formik } from 'formik';
import Loading from '../Loading';
import auth from "@react-native-firebase/auth"
import { showMessage } from 'react-native-flash-message';
const LogInPage = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleAuthentication = async (values) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(values.email,values.password)
      setLoading(false);
      navigation.navigate("MainPageRouter");
    } catch (error) {
      showMessage({
        message: JSON.stringify(error),
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
        <Image
          source={require("../../../assets/logo1.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.company}>Diet App</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => handleAuthentication(values)}
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
              onBlur={handleBlur("password")}
              placeholder='Password...'
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              value={values.password}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.textColor}>Log In</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("SıgnUpPage")}>
          <Text style={styles.link}>or create an account on this link!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LogInPage