import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import SearchPage from './Pages/SearchPage';
import MainPage from './Pages/MainPage';
import RoomPage from './Pages/RoomPage';
import UserInfoPage from './Pages/UserInfoPage';
import DetailPage from './Pages/DetailPage';
import ProfilePage from './Pages/ProfilePage';
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
          component={MainPageRouter}
          />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="UserInfoPage"
          component={UserInfoPage}
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
        }}
        name="MainPageNavigator"
        component={MainPageDetail}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle:"Search",
          headerTintColor:"#5C8374",
          headerTitleAlign:"center"
        }}
        name="SearchPage"
        component={SearchPage}
      />
        <Tab.Screen
        options={{
          headerShown: true,
          headerTitle:"Profile",
          headerTintColor:"#5C8374",
          headerTitleAlign:"center"
        }}
        name="ProfilePage"
        component={ProfilePage}
      />
      
    </Tab.Navigator>
  );
};
const MainPageDetail = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle:"Receipes",
          headerTintColor:"#5C8374",
          headerTitleAlign:"center"
        }}
        name="MainPage"
        component={MainPage}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle:"Receipe Detail",
          headerTintColor:"#5C8374",
          headerTitleAlign:"center"
        }}
        name="DetailPage"
        component={DetailPage}
      />
     
      
    </Stack.Navigator>
  );
};




export default Router;
