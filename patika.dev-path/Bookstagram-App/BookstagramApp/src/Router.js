import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import PostPage from './Pages/PostPage';
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
            headerShown: true,
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
      {/* mainpage */}
      <Tab.Screen
        options={{headerShown: false}}
        name="MainPage"
        component={MainPage}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="PostPage"
        component={PostPage}
      />
      {/* profile */}
      <Tab.Screen
        options={{headerShown: false}}
        name="ProfilePage"
        component={ProfilePage}
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
