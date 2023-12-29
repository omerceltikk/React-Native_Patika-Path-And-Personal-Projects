
import React, { useEffect, useState } from 'react';
import styles from './Weather.Styles';
import { Alert, ImageBackground, FlatList, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import UseFetch from './hooks/UseFetch/useFetch';

function App() {
  const image = { uri: "https://images.pexels.com/photos/7283618/pexels-photo-7283618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  const [location, setLocation] = useState({
    "latitude": 0,
    "longitude": 0,
  })
  const [cityData, setCityData] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const GetCurrentPosition = () => {
    Geolocation.getCurrentPosition((pos) => setLocation({ "latitude": pos.coords.latitude, "longitude": pos.coords.longitude }),
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: false }
    )
  }
  useEffect(() => {
    GetCurrentPosition();
  }, [])
  const { err, loading, data } = UseFetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${String(location.latitude)}&lon=${String(location.longitude)}&units=metric&appid=${Config.API_KEY}`);
  const handlePress = () => {
    const data = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${Config.API_KEY}`).then(res => res.json()).then(res => setCityData(res));
  }
  return (
    <>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.innerContainer}>
          <TextInput id='title' style={styles.input} onChangeText={setSearchCity} />
          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          {
            loading
              ? <Text>Loading...</Text>
              :
              <>
                <View style={styles.card}>
                  <FlatList style={styles.list}  horizontal={true} data={cityData.length != 0 ? cityData.list.slice(0,5) : data?.list?.slice(0,5)} renderItem={RenderProduct} />
                </View>
                <View style={styles.card}>
                <FlatList style={styles.list}  horizontal={true} data={cityData.length != 0 ? cityData.list.slice(3) : data?.list?.slice(3)} renderItem={RenderProduct} />
                </View>
              </>
          }
        </View>
      </ImageBackground>
    </>

  );
}
const RenderProduct = ({ item }) =>
 <View style={styles.innerCard}>
  <Image source={{uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`}}
       style={{width: 40, height: 40}} />
  <View style={styles.cardText}>
  <Text>
    {String(item.main.temp_min).slice(0,2)}°C-
  </Text>
  <Text>
  {String(item.main.temp_max).slice(0,2)}°C
  </Text>
  </View>
  
  <Text>
    Press:{item.main.pressure}
  </Text>
  <Text>
   Humidity: {item.main.humidity}%
  </Text>
  <Text>
   Time:
  </Text>
  <Text>
  {String(item.dt_txt).slice(11).slice(0,5)}
  </Text>
 
</View>


export default App;
