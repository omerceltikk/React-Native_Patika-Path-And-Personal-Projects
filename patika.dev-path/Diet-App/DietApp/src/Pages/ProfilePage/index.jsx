import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import database from "@react-native-firebase/database";
import styles from "./ProfilePage.Style"
import RoomCard from '../../Components/MainCard';
import Loading from "../Loading"
import parseData from '../../utils/parseData';
import getUserInfoFromDb from '../../hooks/getUserDb/getUserDb';
import auth from "@react-native-firebase/auth"
const ProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  
  const findUser = getUserInfoFromDb();



  // if (postData == null) {
  //   return (
  //     <Loading />
  //   )
  // }
console.log(findUser);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>

        <Text>
          {/* {JSON.stringify(user._j)} */}
        </Text>
      </View>

    </SafeAreaView>
  )
}
// }

export default ProfilePage