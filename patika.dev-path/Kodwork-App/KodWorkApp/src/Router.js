import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Favorites from './Pages/FavoritesPage';
import Jobs from './Pages/JobsPage';
import DetailPage from './Pages/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
          options={{headerShown: false}}
          name="JobsRouter"
          component={JobsRouter}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="FavRouter"
          component={FavRouter}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
