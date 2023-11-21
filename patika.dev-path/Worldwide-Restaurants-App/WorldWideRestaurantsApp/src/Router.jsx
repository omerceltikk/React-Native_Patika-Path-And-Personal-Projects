import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SearchPage from './Pages/SearchPage';
import Map from './Pages/MapPage';

const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="Map"
          component={Map}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="SearchPage"
          component={SearchPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
