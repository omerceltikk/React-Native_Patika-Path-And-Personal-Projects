import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInPage from './Pages/LogInPage';
import SıgnUpPage from './Pages/SıgnUpPage';
import MainPage from './Pages/MainPage';
import CategoriesPage from './Pages/CategoriesPage';
import GamePage from './Pages/GamePage';
import ResultPage from './Pages/ResultPage';
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
          headerShown: false,   
        }}
        name="MainPage"
        component={MainPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CategoriesPage"
        component={CategoriesPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="GamePage"
        component={GamePage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ResultPage"
        component={ResultPage}
      />
      
    </Stack.Navigator>
  );
};


export default Router;
