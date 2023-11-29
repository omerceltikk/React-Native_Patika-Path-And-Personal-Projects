import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "./SıgnUpPage.Style";
import { Formik } from 'formik';
import UseFetch from 'use-http';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../../Redux/Slices/GeneralSlice';
import Loading from '../Loading';
import Error from '../Error';

const SıgnUpPage = ({ navigation }) => {
  const { get, post, response, loading, error } = UseFetch('https://example.com')
  const dispatch = useDispatch();
  const findUser = async (values) => {
    const currData = await get();
    const finded = await currData.find((item) => item.email == values.email);
    if (response.ok) {
      const user = {
        "id": Math.floor(Math.random() * 1000000000000),
        "email": values.email,
        "password": values.password,
        "favorites": []
      }
      if (finded) {
        Alert.alert("This email already used")
      } else {
        await post(user);
        await dispatch(isLoggedIn(user))
        await navigation.navigate("MainPageRouter");
      }
    }
  }
  if (loading) {
    return (
      <Loading />
    )
  } else if (error) {
    return (
      <Error props={error} />
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.company}>Marvel App</Text>
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