import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import PostPage from './Pages/PostPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            headerTintColor: '#111426',
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
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#0b0e1a', height:50},
        headerStyle:{ backgroundColor: '#0b0e1a'},
        headerTintColor:"#ccc"
      }}>
      {/* mainpage */}
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: 'Posts',
          
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="MainPage"
        component={MainPage}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: 'Send Post',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
        name="Send Post"
        component={PostPage}
      />
      {/* profile */}
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile Page"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
};

export default Router;
