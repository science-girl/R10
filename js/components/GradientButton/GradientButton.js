import React from "react";
import { colors } from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { Text } from "react-native";
import PropTypes from "prop-types";

const GradientButton = ({ buttonText }) => (
  <LinearGradient
    colors={[colors.Red, colors.Purple]}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.5, y: 1.0 }}
    style={styles.gradientButton}
  >
    <Text style={styles.buttonText}> {buttonText}</Text>
  </LinearGradient>
);

GradientButton.propTypes = {
  buttonText: PropTypes.string.isRequired
};
export default GradientButton;
