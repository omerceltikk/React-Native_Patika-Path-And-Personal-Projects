import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "./SıgnUpPage.Style";
import { Formik } from 'formik';
import Loading from '../Loading';
import Error from '../Error';
import auth from "@react-native-firebase/auth"
const SıgnUpPage = ({ navigation }) => {
  const userSignUp = async (values) => {
    // console.log(values);
     
      auth().createUserWithEmailAndPassword(values.email,values.password)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  
  // if (auth()) {
  //   return (
  //     <Loading />
  //   )
  // } else if (error) {
  //   return (
  //     <Error props={error} />
  //   )
  // }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.company}>Bookstagram</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
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