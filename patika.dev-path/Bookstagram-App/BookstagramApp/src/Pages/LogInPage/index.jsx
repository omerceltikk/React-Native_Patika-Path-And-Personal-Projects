import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "./Loginpage.Style";
import { Formik } from 'formik';
import Loading from '../Loading';
import Error from '../Error';
import auth from "@react-native-firebase/auth"
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
const LogInPage = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const findUser = async (values) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(values.email,values.password).then((res) => {
        dispatch(res.uid);
      })
      setLoading(false);
      navigation.navigate("MainPageRouter");
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
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.company}>Bookstagram</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => findUser(values)}
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