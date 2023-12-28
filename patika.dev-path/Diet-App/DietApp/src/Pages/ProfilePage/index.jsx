import React, { useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import styles from "./ProfilePage.Style"
import Loading from "../Loading"
import parseData from '../../utils/parseData';
import getUserInfoFromDb from '../../hooks/getUserDb/getUserDb';
import { Avatar } from 'react-native-paper';
import { format } from 'date-fns';
import ProfileCard from '../../Components/ProfileCard';
import caloryNeeded from '../../utils/caloryNeededCalculator';
const ProfilePage = () => {
  const foodData = [];
  let totalCalory = 0;
  let caloryResult = 0;
  const date = format(new Date(), 'ccc MMM dd yyyy')
  const user = getUserInfoFromDb();
  
  if (user._j.dietData) {
    const dietData = parseData(user._j.dietData);
    const dateFilteredDietData = dietData.filter((item) => item.mealTime.includes((date)))
    const dailyCalory = dateFilteredDietData.map((item) => totalCalory += Number(item.mealData.item.food.nutrients.ENERC_KCAL));
    foodData.push(dateFilteredDietData)
    caloryResult = caloryNeeded(user._j.findUser); 
  } else {
    return (
      <Loading />
      )
    }
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerArea}>
          <Avatar.Image size={82} source={require("../../../assets/profile-circle.png")} />
          <View>
            <Text style={styles.title}>
              {user._j.findUser?.userEmail}
            </Text>
            <Text style={styles.tag}>
              Calories Needed: {caloryResult} kcal
            </Text>
            <Text style={styles.tag}>
              Today Total Calories: {totalCalory.toString().slice(0,6)} kcal
            </Text>
          </View>
        </View>
        <View style={styles.mainInfo}>
          <View style={styles.infoArea}>
            <View style={styles.innerInfo}>
              <Text style={styles.tag}>
                Age: {user._j.findUser?.age} y.o
              </Text>
              <Text style={styles.tag}>
                Bmi: {user._j.findUser?.bmi.toString().slice(0, 6)}
              </Text>
              <Text style={styles.tag}>
                Gender: {user._j.findUser?.gender}
              </Text>
            </View>
            <View style={styles.innerInfo}>
              <Text style={styles.tag}>
                Weight:  {user._j.findUser?.weight} kg
              </Text>
              <Text style={styles.tag}>
                Height: {user._j.findUser?.height} cm
              </Text>
            </View>
          </View>
        </View>
        {/* calendar */}
        {/* <Calendar/> */}
        <View style={styles.listArea}>
          <FlatList scrollEnabled={true} numColumns={1} renderItem={(item) => <ProfileCard data={item}
          />} data={foodData[0]} />
        </View>
      </View>

    </SafeAreaView>
  )
}
// }

export default ProfilePage