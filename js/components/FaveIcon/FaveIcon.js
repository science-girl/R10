import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";

const FaveIcon = () => (
  <Icon
    active
    name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    size={16}
    color={colors.Red}
  />
);

export default FaveIcon;
