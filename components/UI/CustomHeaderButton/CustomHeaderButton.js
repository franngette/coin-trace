import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton {...props} IconComponent={(Ionicons, MaterialCommunityIcons)} iconSize={23} color={Colors.white} />
  );
};

export default CustomHeaderButton;
