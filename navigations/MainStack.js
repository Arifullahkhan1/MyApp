import { View, Text } from 'react-native'
import React from 'react'
import TodosScreen from "../Screens/TodosScreen";
import SelectedTodoSceen from "../Screens/SelectedTodoSceen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = ({dbInitilized}) => {
  
    const Stack = createStackNavigator();

  
    return (
    
       <Stack.Navigator >
          <Stack.Screen name='TodoScreen' 
           component={TodosScreen}
           options={{headerShown:false}}/>
           <Stack.Screen name='SelectedToDoScreen'
            component={SelectedTodoSceen}
            options={{headerShown:false}}
            initialParams={{dbInitilized:dbInitilized}}
            />
        </Stack.Navigator>
   
  )
}

export default MainStack