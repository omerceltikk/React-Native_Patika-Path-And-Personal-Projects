
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Loading from '../../components/Loading';
import UseFetch from '../../hooks/UseFetch';
import ListedCategoryCard from '../../components/ListedCategoryCard';

function CategoryList({ route, navigation }) {
  const category = route.params;
  const { err, loading, data } = UseFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.id}`);

  const HandlePress = (mealID) => {
    navigation.navigate("MealDetail", { mealID })
  }
  const renderProduct = ({ item }) => <ListedCategoryCard item={item} onPress={() => HandlePress(item.idMeal)} />
  if(loading) {
    return( 
    <View style={styles.container}>
    <Loading />
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList scrollEnabled={false} data={data.meals} renderItem={renderProduct} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default CategoryList;
