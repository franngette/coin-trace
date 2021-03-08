import React from "react";
import { Image, StyleSheet } from "react-native";
import path from "./IconHelper";

const CoinIcon = ({ size, icon }) => {
  return <Image style={styles(size).img} source={path[icon]} />;
};

const styles = (size) =>
  StyleSheet.create({
    img: {
      width: size,
      height: size,
      resizeMode: "stretch",
    },
  });

export default CoinIcon;
