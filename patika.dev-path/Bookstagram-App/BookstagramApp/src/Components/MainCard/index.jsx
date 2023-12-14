import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image, FlatList } from 'react-native'
import { styles } from './MainCard.Style'
import { addFavorites } from '../../Redux/Slices/GeneralSlice'
const PostsCard = (data) => {
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
    <View key={data.id} style={styles.card}>
      <View style={styles.generalCard}>
        <View style={styles.headerArea}>
          <Image style={styles.icon} source={require("../../../assets/profile-circle.png")}/>
        <Text style={styles.header}>
          {data?.item?.id}
        </Text>
        </View>
         { <Image style={styles.image} source={{ uri: `${data?.item?.image}` }} />
        } 
        <Text style={styles.bookHeader}>
          {data?.item?.bookName}
        </Text>
        <Text style={styles.category}>
          {data?.item?.category}
          </Text>
        <Text style={styles.title}>
          {data?.item?.title}
          </Text>       
      </View>
    </View>
  )
}

export default PostsCard