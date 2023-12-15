import React from 'react'
import { View, Text } from 'react-native'

const Error = ({props}) => {
  return (
    <View>
      <Text>
        {JSON.stringify(props)}
      </Text>
    </View>
  )
}

export default Error