import React from 'react'
import { View, Image,Text } from 'react-native'
import styles from "./Profile.Style"
const ProfilePage = () => {
  return (
    <View style={styles.container}>
       <View style={styles.headerArea}>
          <Image style={styles.icon} source={require("../../../assets/profile-circle.png")}/>
        <Text style={styles.header}>
          item.name
        </Text>
        </View>
        <View style={styles.postsArea}>
          
        </View>
    </View>

    )
}

export default ProfilePage