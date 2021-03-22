import React from "react";
import Colors from "../../../constants/Colors";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CoinIcon from "../CoinIcon/CoinIcon";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addPair } from "../../../store/actions/coinPair";

const CoinPairs = ({ pair }) => {
  const pairs = useSelector((state) => state.pairs.pairs);
  const dispatch = useDispatch();

  const storePair = () => {
    const newPair = (pair.primary + pair.secondary).toString();
    const findPair = pairs.filter((el) => el.pair === newPair);
    if (findPair.length > 0) {
    } else {
      dispatch(addPair(newPair));
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.pairContainer}>
        <View style={styles.coinContainer}>
          <Text style={styles.coinText}>{pair.primary}</Text>
          <CoinIcon icon={pair.primary} size={25} />
        </View>
        <View style={styles.coinContainer}>
          <Text style={styles.coinText}>{pair.secondary}</Text>
          <CoinIcon icon={pair.secondary} size={25} />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => storePair()}>
          <Ionicons name="ios-add-circle-outline" size={24} color={Colors.lightBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 60,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  pairContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
  coinContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  coinText: {
    textTransform: "uppercase",
    fontFamily: "roboto-bold",
  },
});

export default CoinPairs;
