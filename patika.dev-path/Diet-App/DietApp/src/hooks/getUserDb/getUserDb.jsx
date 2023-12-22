import { useEffect, useState } from "react"
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import parseData from "../../utils/parseData"
 const getUserInfoFromDb = async () => {
  const [userData, setUserData] = useState("")
  const [loading,setLoading] = useState(true)
  const user = auth().currentUser
  const db = database().ref("/dietapp/users");
 await useEffect(() => {
    db.once('value', snapshot => {
      const res = snapshot.val();
      const parsedData = parseData(res);
      setUserData(parsedData);
      
    });
  }, [])
  const findUser = await userData.find((item) => item.userEmail == user.email);
  await setLoading(false)

 return {findUser,loading}
}
export default getUserInfoFromDb