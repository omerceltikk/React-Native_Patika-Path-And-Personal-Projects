import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Favorites from './Pages/FavoritesPage';
import Jobs from './Pages/JobsPage';
import DetailPage from './Pages/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const JobsRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};
const FavRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};
const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: 'Jobs',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="file-check-outline" color={color} size={size} />
            )
          }}
          name="JobsRouter"
          component={JobsRouter}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star-outline" color={color} size={size} />
            )
          }}
          name="FavRouter"
          component={FavRouter}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
