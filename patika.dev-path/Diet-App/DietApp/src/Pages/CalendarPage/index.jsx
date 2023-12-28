import React, { useState } from 'react'
import { FlatList, View, Text, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import ProfileCard from '../../Components/ProfileCard'
import getUserInfoFromDb from '../../hooks/getUserDb/getUserDb'
import Loading from '../Loading'
import parseData from '../../utils/parseData'
import { format } from 'date-fns';
import styles from './CalendarPage.Style'
const CalendarPage = () => {
  const [chooseDate, SetChooseDate] = useState(null)
  const foodData = [];
  const user = getUserInfoFromDb();
  const date = chooseDate != null && format(chooseDate, 'ccc MMM dd yyyy');
  let totalCalory = 0;

  if (user._j.dietData) {
    const dietData = parseData(user._j.dietData);
    if (chooseDate != null) {
      const dateFilteredDietData = dietData.filter((item) => item.mealTime.includes((date)));
      dateFilteredDietData.map((item) => totalCalory += Number(item.mealData.item.food.nutrients.ENERC_KCAL));
      foodData.push(dateFilteredDietData)
    }
  } else {
    return (
      <Loading />
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Calendar
        style={{
          borderRadius:25,
          padding:10
        }}
          onDayPress={day => {
            SetChooseDate(day.dateString)
          }} />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>
          {chooseDate != null && date}
        </Text>
        <Text style={styles.title}>
          Total Calory:  {chooseDate != null && totalCalory.toString().slice(0, 6)} kcal
        </Text>
        <Text style={styles.title}>
          Meal List:
        </Text>
        <View style={styles.listArea}>
          <FlatList scrollEnabled={false} numColumns={1} renderItem={(item) => <ProfileCard data={item}
          />} data={foodData[0]} />
        </View>
      </View>
    </ScrollView>
  )
}

export default CalendarPage