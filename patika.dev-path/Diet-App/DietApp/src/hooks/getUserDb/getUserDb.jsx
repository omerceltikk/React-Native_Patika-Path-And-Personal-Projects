import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import parseData from "../../utils/parseData";

const getUserInfoFromDb = async () => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [currUser, setCurrUser] = useState(null);
  const user = auth().currentUser;
  const db = database().ref("/dietapp/users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.on("value", snapshot => {
          const res = snapshot.val();
          const parsedData = parseData(res);
          setUserData(parsedData);
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const findUser = userData.find((item) => item.userEmail == user.email);

  return {
    findUser: findUser,
    loading: loading,
    dietData: findUser.dietData
  }

};

export default getUserInfoFromDb;
