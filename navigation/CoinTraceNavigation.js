import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen, { screenOptions as HomeScreenOptions } from "../screens/HomeScreen";
import CoinChooserScreen, { screenOptions as CoinChooserScreenOptions } from "../screens/CoinChooserScreen";

const CoinTraceNavigation = () => {
  Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions} />
        <Stack.Screen name="CoinChooser" component={CoinChooserScreen} options={CoinChooserScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CoinTraceNavigation;
