import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "./Loginpage.Style";
import { Formik } from 'formik';
import UseFetch from 'use-http';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../../Redux/Slices/GeneralSlice';
import Loading from '../Loading';
import Error from '../Error';

const LogInPage = ({navigation}) => {
  const { loading, error, data = [] } = UseFetch('https://jsonplaceholder.typicode.com/users', [])
  const dispatch = useDispatch();
  const findUser = async (values) => {
    const finded = data.find((item) => item.email == values.email);
    if (finded) {
      if (finded.username == values.password) {
        dispatch(isLoggedIn(data));
        navigation.navigate("MainPageRouter")
      } else {
        Alert.alert("password is not correct")
      }
    } else {
      Alert.alert("User not found")
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
        <Image
          // source={require()}
          style={styles.imageStyle}
        />
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