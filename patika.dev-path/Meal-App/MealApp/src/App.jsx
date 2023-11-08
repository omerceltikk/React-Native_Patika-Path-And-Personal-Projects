
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Loading from './components/Loading';
import UseFetch from './hooks/UseFetch';
import CategoryCard from './components/CategoryCard';


function App({navigation}) {
  const { err, loading, data } = UseFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const HandlePress = (id) => {
    navigation.navigate("CategoryList",{id});
  }
const renderProduct = ({item}) => (
<CategoryCard item={item} onPress={() => HandlePress(item.strCategory)}/>
);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
     { loading ? <Loading/> :
        <FlatList scrollEnabled={false} data={data.categories} renderItem={renderProduct}/>
      }
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding:20
  },


});

export default App;
