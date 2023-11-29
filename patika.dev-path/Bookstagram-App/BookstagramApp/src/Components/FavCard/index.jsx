import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './FavCard.Style'
import { removeFavorites } from '../../Redux/Slices/GeneralSlice'
const FavCard = ({ item, onPress }) => {
  const HandlePress = () => {
    dispatch(removeFavorites(item.id));
  }
  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.generalCard}>
      {item.thumbnail  ? <Image style={styles.image} source={{ uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}` }} /> : item.images[0] && <Image style={styles.image} source={{ uri: `${item.images[0]?.path}.${item.images[0]?.extension}` }} />
        }
        <View style={styles.inner}>
          <Text style={styles.name}>{item.name ? item.name : item.title}</Text>
        </View>
        <TouchableOpacity onPress={() => HandlePress()} style={styles.button}>
          <Text style={styles.button}>
            Remove Favorites!
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default FavCard