import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image,FlatList } from 'react-native'
import { styles } from './JobsCard.Style'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../../Redux/Slices/GeneralSlice'
const ComicsCard = ({ item, onPress }) => {
  const dispatch = useDispatch();
  const renderProduct = ({ item }) =>
   <TouchableOpacity>
    <Text>
      {item.name}
    </Text>
  </TouchableOpacity>
  const HandlePress = () => {
    dispatch(addFavorites(item));
  }
  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.generalCard}>
        {item.images[0] && <Image style={styles.image} source={{ uri: `${item.images[0]?.path}.${item.images[0]?.extension}` }} />
        }
        <View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
        <View style={styles.innerCard}>
          <View >
            <FlatList horizontal={false} numColumns={2} columnWrapperStyle={styles.inner} scrollEnabled={false} data={item.characters?.items} renderItem={renderProduct} />
          </View>
        </View>
        <View style={styles.innerCard}>
          <TouchableOpacity onPress={() => onPress()} style={styles.button}>
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

export default ComicsCard