import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Characters from './Pages/CharactersPage';
import Comics from './Pages/ComicsPage';
import DetailPage from './Pages/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import LogInPage from './Pages/LogInPage';
import FavPage from './Pages/FavPage';
import SıgnUpPage from './Pages/SıgnUpPage';

const Router = () => {
  // const data = useSelector(state => state.marvel);
  // console.log(data.isLoggedIn);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen component={LogInPage} name='LogInPage'/> */}
        {/* <Stack.Screen component={SıgnUpPage} name='SıgnUpPage'/> */}
        <Stack.Screen name="MainPageRouter" component={MainPageRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainPageRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="ComicsRouter"
        component={ComicsRouter}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="CharactersRouter"
        component={CharactersRouter}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Favorites"
        component={FavPage}
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
