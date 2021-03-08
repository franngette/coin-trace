import React from "react";
import { Text, View, FlatList } from "react-native";
import Colors from "../constants/Colors";
import CoinPairs from "../components/coin/CoinPairs";
import pairs from "../helpers/dummyData";
const CoinChooserScreen = () => {
  const renderPairs = () => {
    return pairs.map((e, i) => {
      let arr = [];
      let first = e.substring(0, 3).toLocaleLowerCase();
      let second = e.substring(3, 6).toLocaleLowerCase();
      arr.push(first);
      arr.push(second);
      console.log(arr);
      return <CoinPairs pair={arr} key={i} />;
    });
  };
  return <View>{renderPairs()}</View>;
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Coin pairs",
    headerStyle: {
      backgroundColor: Colors.lightBlue,
    },
    headerTintColor: Colors.white,
  };
};

export default CoinChooserScreen;
