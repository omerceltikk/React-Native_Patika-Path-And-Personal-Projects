import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image, FlatList } from 'react-native'
import { styles } from './MainCard.Style'
import { addFavorites } from '../../Redux/Slices/GeneralSlice'
const PostsCard = ({ item }) => {
  // const dispatch = useDispatch();
  // const renderProduct = ({ item }) =>
  //  <TouchableOpacity>
  //   <Text>
  //     {item.name}
  //   </Text>
  // </TouchableOpacity>
  const HandlePress = () => {
    dispatch(addFavorites(item));
  }
  return (
    <View style={styles.card}>
      <View style={styles.generalCard}>
        <View style={styles.headerArea}>
          <Image style={styles.icon} source={require("../../../assets/profile-circle.png")}/>
        <Text style={styles.header}>
          item.name
        </Text>
        </View>
        {/* {item.thumbnail && <Image style={styles.image} source={{ uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}` }} />
        } */}
        <Text style={styles.bookHeader}>
          item.bookName
        </Text>
        <Text style={styles.category}>
          item.category
          </Text>
        <Text style={styles.title}>
          item.title
          </Text>
      </View>
    </View>
  )
}

export default PostsCard