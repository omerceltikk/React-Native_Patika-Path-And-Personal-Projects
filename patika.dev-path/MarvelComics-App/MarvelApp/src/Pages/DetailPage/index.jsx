import React from 'react'
import { ScrollView, View, Text, Image } from "react-native";
import CryptoJS from "crypto-js"
import useFetch from "use-http"
import Config from 'react-native-config'
import Loading from '../Loading'
import Error from '../Error'
import { styles } from './DetailPage.Style';
const DetailPage = ({ route }) => {
  const { id, type } = route.params;
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + Config.PRIVATE_API_KEY + Config.PUBLIC_API_KEY).toString();
  const { loading, error, data = [] } = useFetch(`http://gateway.marvel.com/v1/public/${type}/${id}?ts=${ts}&apikey=${Config.PUBLIC_API_KEY}&hash=${hash}`, []);
  const updateData = !loading && data.data?.results[0]
  if (loading) {
    return (
      <Loading />
    )
  } else if (error) {
    return (
      <Error props={error} />
    )
  } return (
    <ScrollView style={styles.container}>
      <View style={styles.generalCard}>
        {updateData.thumbnail ? <Image style={styles.image} source={{ uri: `${updateData.thumbnail?.path}.${updateData.thumbnail?.extension}` }} /> : updateData.images[0] && <Image style={styles.image} source={{ uri: `${updateData.images[0]?.path}.${updateData.images[0]?.extension}` }} />
        }
        <View style={styles.inner}>
          <Text style={styles.name}>{updateData.title ? updateData.title : updateData.name}</Text>
        </View>
        <View style={styles.inner}>
          <Text style={styles.name}>{updateData.description}</Text>
        </View>
        <View style={styles.inner}>
          <Text>{updateData.textObjects[0]?.language ? updateData.textObjects[0]?.language : null}</Text>
        </View>
        <View style={styles.inner}>
          <Text>{updateData.textObjects[0]?.text ? updateData.textObjects[0]?.text : null}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailPage