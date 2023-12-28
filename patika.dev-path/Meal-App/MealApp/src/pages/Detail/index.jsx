
import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import UseFetch from '../../hooks/UseFetch';
import { styles } from './DetailStyle';
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';
function MealDetail({route}) {
  const category = route.params;
  const { err, loading, data } = UseFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${category.mealID}`);
    return (
    <View style={styles.container}>
      {loading ? <Loading/> : <DetailCard item={data}/>}
    </View>
  );
}


export default MealDetail;
