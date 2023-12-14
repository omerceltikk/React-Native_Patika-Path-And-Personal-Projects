import {useEffect, useState} from 'react'
import { View, Image,Text,FlatList } from 'react-native'
import styles from "./Profile.Style"
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database";
import parseData from '../../utils/parseData';
import ProfilePageCard from '../../Components/ProfilePageCard';
const ProfilePage = () => {
  const [userPostData,setUserPostData] = useState([])
  const user = auth().currentUser
  const data = database().ref("/bookstagram/posts");
  useEffect(() => {
    data.on('value', snapshot => {
    const res =  snapshot.val();
    const parsedData = parseData(res);
    const filtered = parsedData.filter((res) => res.userid == user.uid)
    setUserPostData(filtered);
  });
 
  },[])
  return (
    <View style={styles.container}>
       <View style={styles.headerArea}>
          <Image style={styles.icon} source={require("../../../assets/profile-circle.png")}/>
        <Text style={styles.header}>
          {user.email}
        </Text>
        </View>
        <View style={styles.postsArea}>
        <FlatList scrollEnabled={true} renderItem={ProfilePageCard}  data={userPostData}/>    
        </View>
    </View>

    )
}

export default ProfilePage