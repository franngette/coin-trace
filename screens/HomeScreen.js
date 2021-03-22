import React, { useEffect, useCallback } from "react";
import Colors from "../constants/Colors";

import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";
import { useSelector } from "react-redux";
import PairTraced from "../components/UI/PairTraced/PairTraced";
import { sendWs } from "../helpers/WebSocket";

const HomeScreen = () => {
  const pairs = useSelector((state) => state.pairs.pairs);

  useEffect(() => {
    pairs.forEach((element) => {
      if (!element.chanId) sendWs(element.pair.toUpperCase());
    });
  }, [pairs]);

  const renderItems = useCallback(({ item }) => <PairTraced pair={item} />, []);
  const keyExtractor = useCallback((pairs) => pairs.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={pairs} keyExtractor={keyExtractor} renderItem={renderItems} />
    </SafeAreaView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
