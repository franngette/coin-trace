import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const HomeScreen = () => {
  return (
    <View>
      <Text>This is the HomeScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={"database-plus"}
            onPress={() => {
              navData.navigation.navigate("CoinChooser");
            }}
          />
        </HeaderButtons>
      );
    },
    headerStyle: {
      backgroundColor: Colors.lightBlue,
    },
    headerTintColor: Colors.white,
  };
};

export default HomeScreen;
