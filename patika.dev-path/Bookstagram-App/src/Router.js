import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import Characters from './Pages/CharactersPage';
// import Comics from './Pages/ComicsPage';
// import DetailPage from './Pages/DetailPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import FavPage from './Pages/FavPage';
import Loading from './Pages/Loading';
const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
          }} component={LogInPage}
           name='LogInPage'/>
        <Stack.Screen options={{
            headerShown: false,
          }} component={SıgnUpPage} 
          name='SıgnUpPage'/>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainPageRouter"
          component={SıgnUpPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainPageRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {/* mainpage */}
      <Tab.Screen
        options={{headerShown: false}}
        name="ComicsRouter"
        component={Loading}
      />
      {/* profile */}
      <Tab.Screen
        options={{headerShown: false}}
        name="CharactersRouter"
        component={Loading}
      />
    </Tab.Navigator>
  );
};

// // initial routes
// const ComicsRouter = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Comics" component={Comics} />
//       <Stack.Screen name="Detail" component={DetailPage} />
//     </Stack.Navigator>
//   );
// };
// const CharactersRouter = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Characters" component={Characters} />
//       <Stack.Screen name="Detail" component={DetailPage} />
//     </Stack.Navigator>
//   );
// };

export default Router;
