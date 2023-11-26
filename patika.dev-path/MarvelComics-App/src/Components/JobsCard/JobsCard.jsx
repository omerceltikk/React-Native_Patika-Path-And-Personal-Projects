import React from 'react'
import { View, Text, TouchableOpacity,Alert } from 'react-native'
import { styles } from './JobsCard.Style'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../../Redux/Slices/GeneralSlice'
const JobsCard = ({ item, onPress }) => {
  const dispatch = useDispatch();
const HandlePress = () => {
  dispatch(addFavorites(item));
}
  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.generalCard}>
        <View style={styles.innerCard}>
          <View style={styles.inner}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.category}>{item.categories[0].name}</Text>
          </View>
        </View>
        <View style={styles.innerCard}>
          <View style={styles.inner}>
            <Text>{item.levels[0].name}</Text>
          </View>
          <View style={styles.inner}>
            <Text>{item.locations[0].name}</Text>
          </View>
          <View style={styles.inner}>
            <Text>{item.company.name}</Text>
          </View>
        </View>
        <View style={styles.innerCard}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.button}>
              Explore!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress()} style={styles.button}>
            <Text style={styles.button}>
              Add Favorites!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default JobsCard