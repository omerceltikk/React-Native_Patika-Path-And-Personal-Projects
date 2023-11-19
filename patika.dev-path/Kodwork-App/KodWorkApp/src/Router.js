import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Favorites from './Pages/FavoritesPage';
import Jobs from './Pages/JobsPage';
const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="Fav" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default Router;
