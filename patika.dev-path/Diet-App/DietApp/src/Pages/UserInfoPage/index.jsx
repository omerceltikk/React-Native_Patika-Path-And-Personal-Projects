import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from "./UserInfo.Style"
import { Formik } from 'formik';
import Loading from '../Loading';
import database from "@react-native-firebase/database"
import { showMessage } from 'react-native-flash-message';
import { RadioButton } from 'react-native-paper';
import DropdownComp from '../../Components/Dropdown';
import auth from "@react-native-firebase/auth"
import helperData from "../../Components/Dropdown/helperData"
const UserInfoPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const userMail = auth().currentUser.email
  const handleUserInfo = async (values) => {
    const currData = {
      userEmail: userMail,
      gender: values.gender,
      age: values.age,
      weight: values.weight,
      height: values.height,
      activity: values.activity,
      bmi: values.weight / ((values.height / 100) * (values.height / 100)),
      dietData: ""
    }
    try {
      await database().ref("/dietapp/users").push(currData)
      setLoading(false)
      showMessage({
        message: "Kullanıcı kaydı oluşturuldu",
        type: "success",
      });
      navigation.navigate("MainPageRouter")
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
        <Text style={styles.title}>
          this page aims to calculate your body mass index(BMI). Based on this, it will suggest a diet list as you prefer.
          <Text style={styles.titleColored}>Please make sure you fill in the information completely.</Text>
        </Text>
        <Formik
          initialValues={{ gender: "", age: "", height: "", weight: "", activity: "" }}
          onSubmit={values => handleUserInfo(values)}
        >{({
          handleChange,
          handleBlur,
          handleSubmit,
          values
        }) => (
          <View>
            <Text style={styles.company}>Gender:</Text>
            <RadioButton.Group
              onValueChange={handleChange("gender")}
              value={values.gender}>
              <View style={styles.genderGroup}>
                <View style={styles.innerRadio}>
                  <Text style={styles.radioText}>Male</Text>
                  <RadioButton color='#5C8374' value="male" />
                </View>
                <View style={styles.innerRadio}>
                  <Text style={styles.radioText}>Female</Text>
                  <RadioButton color='#5C8374' value="female" />
                </View>
              </View>
            </RadioButton.Group>
            <Text style={styles.company}>Personal Info:</Text>
            <View style={styles.innerInputGroup}>
              <TextInput
                style={styles.innerInput}
                onBlur={handleBlur("age")}
                placeholder='Age...'
                onChangeText={handleChange("age")}
                value={values.age}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.innerInput}
                keyboardType="numeric"
                onBlur={handleBlur("height")}
                placeholder='Height (cm)...'
                onChangeText={handleChange("height")}
                value={values.height}
              />
              <TextInput
                keyboardType="numeric"
                style={styles.innerInput}
                onBlur={handleBlur("weight")}
                placeholder='Weight (kg)...'
                onChangeText={handleChange("weight")}
                value={values.weight}
              />
            </View>
            <Text style={styles.company}>Target:</Text>
            <DropdownComp
              onChange={handleChange("activity")}
              value={values.activity}
              onBlur={handleBlur("activity")}
              data={helperData}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.textColor}>Submit</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
      </View>
    </View>
  )
}

export default UserInfoPage