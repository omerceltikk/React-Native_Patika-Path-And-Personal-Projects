import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Characters from './Pages/CharactersPage';
import Comics from './Pages/ComicsPage';
import DetailPage from './Pages/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import FavPage from './Pages/FavPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{
            headerShown: false,
          }} component={LogInPage}
           name='LogInPage'/>
        <Stack.Screen options={{
            headerShown: false,
          }} component={SıgnUpPage} 
          name='SıgnUpPage'/> */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainPageRouter"
          component={MainPageRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainPageRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            )
        }}
        name="ComicsRouter"
        component={ComicsRouter}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Characters',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="domino-mask" color={color} size={size} />
            )
        }}
        name="CharactersRouter"
        component={CharactersRouter}
      />
      <Tab.Screen
        name="Favorites"
        component={FavPage}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star-outline" color={color} size={size} />
            )
        }}
      />
    </Tab.Navigator>
  );
};

// initial routes
const ComicsRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Comics" component={Comics} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};
const CharactersRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default Router;
