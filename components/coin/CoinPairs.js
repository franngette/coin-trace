import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../constants/Colors";
import CoinIcon from "../UI/CoinIcon/CoinIcon";

const CoinPairs = ({ pair }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text>{pair[0]}</Text>
        <CoinIcon icon={pair[0]} size={20} />
      </View>
      <View>
        <Text>{pair[1]}</Text>
        <CoinIcon icon={pair[1]} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 50,
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
});

export default CoinPairs;
