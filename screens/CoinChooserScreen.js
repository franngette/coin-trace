import React from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

import CoinPairs from "../components/UI/coin/CoinPairs";

import pairs from "../helpers/dummyData";

const CoinChooserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pairs}
        keyExtractor={(pairs) => pairs.id.toString()}
        renderItem={({ item }) => <CoinPairs pair={item} />}
      ></FlatList>
    </SafeAreaView>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CoinChooserScreen;
