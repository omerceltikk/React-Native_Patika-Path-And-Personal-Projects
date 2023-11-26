import React from 'react'
import { View, Text } from 'react-native'

const Error = ({props}) => {
  return (
    <View>
      <Text>
        {props}
      </Text>
    </View>
  )
}

export default Error