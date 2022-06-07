import {} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./navigations/MainStack";
import About from "./navigations/About";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { initDB } from "./database/localdb";
import FatcData from "./Screens/FatcData";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [dbInitilized, setDbInitilized] = useState(false);
  //const BottomStack = createBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {
    initDB()
      .then((res) => {
        setDbInitilized(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{ headerShown: false, tabBarShowLabel: false }}
          style={{marginTop:50}}
        >
          <Tab.Screen
            name="MainStack"
            component={MainStack}
            initialParams={{dbInitilized:dbInitilized}}
            options={{
              tabBarIcon: () => (
                <Ionicons name="ios-home-outline" size={24} color="black" />
                  
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="user-secret" size={24} color="black" />
                
              ),
            }}
          />
          <Tab.Screen
            name="FatchData"
            component={FatcData}
            options={{
              tabBarIcon: () => (
                <Feather name="film" size={24} color="black" />
                
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
