import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import MainPage from './Pages/MainPage';
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
            headerTintColor: "#111426",
          }}
          name="MainPageRouter"
          component={MainPageRouter}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainPageRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
      
        options={{
          headerShown: true,
          headerTitle:"Rooms",
          headerTintColor:"#E36414",
          headerTitleAlign:"center"
        }}
        name="MainPage"
        component={MainPage}
      />
      
    </Stack.Navigator>
  );
};


export default Router;
