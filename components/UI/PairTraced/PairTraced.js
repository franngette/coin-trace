import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import CoinIcon from "../CoinIcon/CoinIcon";
const PairTraced = ({ pair }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.pairContainer}>
        <View style={styles.pairIcons}>
          <CoinIcon icon={pair.pair.substring(0, 3)} size={20} />
          <CoinIcon icon={pair.pair.substring(3, 6)} size={20} />
        </View>
        <View>
          <Text style={styles.pairTitle}>{pair.pair.toUpperCase()}</Text>
          <Text style={styles.pairDesc}>
            {pair.pair.substring(0, 3).toUpperCase()} / {pair.pair.substring(3, 6).toUpperCase()}
          </Text>
        </View>
      </View>
      <View>
        <Text>$11</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: Colors.gray,
    borderWidth: 2,
    margin: 10,
    padding: 20,
  },
  pairContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pairIcons: {
    height: 30,
    justifyContent: "space-around",
    marginRight: 20,
  },
  pairTitle: {
    fontFamily: "roboto-bold",
  },
  pairDesc: {
    fontSize: 12,
  },
});

export default PairTraced;
