import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Início" component={TabNavigator} />
      <Stack.Screen name="História" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
