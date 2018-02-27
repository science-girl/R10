import React from "react";
//import PropTypes from 'proptypes';
import { Text, View } from "react-native";
import { styles } from "./styles";

const About = ({ header, description }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>{header}</Text>
      <Text style={styles.paragraphText}>{description}</Text>
    </View>
  );
};

export default About;
