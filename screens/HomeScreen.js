import React, { useEffect, useCallback, useState } from "react";
import Colors from "../constants/Colors";

import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { getPairs } from "../store/actions/coinPair";
import PairTraced from "../components/UI/PairTraced/PairTraced";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pairs = useSelector((state) => state.pairs);

  const getData = () => {
    dispatch(getPairs());
  };

  useEffect(() => {
    getData();
  }, []);

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
