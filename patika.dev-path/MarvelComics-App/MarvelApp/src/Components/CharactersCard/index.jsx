import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image,FlatList } from 'react-native'
import { styles } from './JobsCard.Style'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../../Redux/Slices/GeneralSlice'
const CharactersCard = ({ item, onPress }) => {
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
  console.log(item.urls[0]?.url);
  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.generalCard}>
        {item.thumbnail && <Image style={styles.image} source={{ uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}` }} />
        }
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text>{item.description}</Text>
        </View>
        
        <View style={styles.innerCard}>
          <View >
            <FlatList horizontal={false} numColumns={2} columnWrapperStyle={styles.inner} scrollEnabled={false} data={item.stories?.items} renderItem={renderProduct} />
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

export default CharactersCard