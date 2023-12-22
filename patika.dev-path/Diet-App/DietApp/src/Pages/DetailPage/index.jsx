import React from 'react'
import { Text, View } from 'react-native';
const DetailPage = ({route}) => {
  const {receipeData,fromReceipe} = route.params;
  return (
  <View>
    <Text>
      {JSON.stringify(receipeData)}
    </Text>
  </View>
    )
}

export default DetailPage