import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Donate from "../Screen/Donate";
import UserInputScreen from "../Screen/UserInputScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const AppNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={UserInputScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Donate"
      component={Donate}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="currency-usd"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigation;
