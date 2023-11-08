import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import App from './App'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from './pages/CategoryList';
import MealDetail from './pages/Detail';
const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={
          {
            title:"Categories",
            headerStyle:{backgroundColor: "#2B3499"},
            headerTitleStyle:{color:"#cecece",textAlignVertical:"center"}
          }
        }/>
        <Stack.Screen name="CategoryList" component={CategoryList}
        options={
          {
            title:"In Category",
            headerStyle:{backgroundColor: "#2B3499"},
            headerTitleStyle:{color:"#cecece",textAlignVertical:"center"}
          }
        }
         />
        <Stack.Screen name="MealDetail" component={MealDetail}
        options={
          {
            title:"Meal Detail",
            headerStyle:{backgroundColor: "#2B3499"},
            headerTitleStyle:{color:"#cecece",textAlignVertical:"center"}
          }
        }
         />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Router