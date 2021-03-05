import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
const CoinChooserScreen = () => {
  return (
    <View>
      <Text>Choose the coin</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Choose a coin",
    headerStyle: {
      backgroundColor: Colors.lightBlue,
    },
    headerTintColor: Colors.white,
  };
};

export default CoinChooserScreen;
