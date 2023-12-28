import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import SearchPage from './Pages/SearchPage';
import MainPage from './Pages/MainPage';
import UserInfoPage from './Pages/UserInfoPage';
import DetailPage from './Pages/DetailPage';
import ProfilePage from './Pages/ProfilePage';
import CalendarPage from './Pages/CalendarPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-paper';
const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={LogInPage}
          name="LogInPage"
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={SıgnUpPage}
          name="SıgnUpPage"
        />
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
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor="#004225"
      inactiveColor="#cecece"
      tabBarColor="#000"
      barStyle={{backgroundColor: '#5C8374', borderRadius:25}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel:"Home",
          tabBarIcon: ({ color }) => (
            <Icon source="home" color={color}  size={26} />
          ),
          tabBarColor:"#000"
        }}
        name="MainPageNavigator"
        component={MainPageDetail}
        
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: 'Search',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Icon source="text-search" color={color}  size={26} />
          ),
        }}
        name="SearchPage"
        component={SearchPage}
      />

      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: 'Calendar',
          tabBarLabel: 'Calendar', 
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Icon source="calendar" color={color}  size={26} />
          ),
        }}
        name="CalendarPage"
        component={CalendarPage}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: 'Profile',
          tabBarLabel: 'Profile', 
          headerTitleAlign: 'center',
          headerTintColor: '#5C8374',
          tabBarIcon: ({ color }) => (
            <Icon source="account" color={color}  size={26} />
          ),
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
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="MainPage"
        component={MainPage}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Receipe Detail',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="DetailPage"
        component={DetailPage}
      />
    </Stack.Navigator>
  );
};

export default Router;
