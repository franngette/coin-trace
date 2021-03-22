import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Button, Platform } from "react-native";
import Colors from "../../../constants/Colors";
import CoinIcon from "../CoinIcon/CoinIcon";
import cryptocurrencies from "cryptocurrencies";
import { useDispatch } from "react-redux";
import { removePair } from "../../../store/actions/coinPair";

const PairTraced = ({ pair }) => {
  const primary = pair.pair.substring(0, 3).toUpperCase();
  const secondary = pair.pair.substring(3, 6).toUpperCase();
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  const pressHandler = () => {
    setPressed(!pressed);
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => {
          pressHandler();
        }}
        onPressOut={() => {
          pressHandler();
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? Colors.gray : "white",
          },
          styles.pairWrapper,
        ]}
      >
        <View style={styles.pairContainer}>
          <View style={styles.pairIcons}>
            <CoinIcon icon={pair.pair.substring(0, 3)} size={20} />
            <CoinIcon icon={pair.pair.substring(3, 6)} size={20} />
          </View>
          <View>
            <Text style={styles.pairTitle}>{pair.pair.toUpperCase()}</Text>
            <Text style={styles.pairDesc}>
              {cryptocurrencies[primary]} / {cryptocurrencies[secondary]}
            </Text>
          </View>
        </View>
        {pair.prices && (
          <View style={styles.prices}>
            <Text>{pair.prices[6]}</Text>
            <Text>
              {pair.prices[4]} %{pair.prices[5]}
            </Text>
          </View>
        )}
      </Pressable>
      {pressed && (
        <View style={styles.child}>
          <Button title="Remove" onPress={() => dispatch(removePair(pair))} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  pairWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
    borderColor: Colors.gray,
    borderWidth: 2,
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
  child: {
    width: "60%",
    height: 100,
    backgroundColor: "red",
    position: "absolute",
    top: 60,
    zIndex: 50,
    elevation: Platform.OS === "android" ? 50 : 0,
  },
  prices: {
    alignItems: "flex-end",
  },
});

export default PairTraced;
